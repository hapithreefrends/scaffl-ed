import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createClient } from "@/utilities/supabase/client";
import {
  IUser,
  IUserCreateData,
  IUserFull,
  IUserUpdateData,
} from "@/app/_models/user";

const supabase = createClient();

export function useFindAllUsers() {
  return useQuery<IUserFull[]>({
    queryKey: ["admin", "users"],
    queryFn: async () => {
      const { data, error } = await supabase.from("User").select(`
          *,
          difficulty: Difficulty (*),
          programming_language: ProgrammingLanguage (*),
          chapters: Chapter (
            *, 
            activity_lessons: ActivityLesson (*)
          )
        `);

      if (error) {
        throw error;
      }

      return data;
    },
  });
}

export function useFindUserById(id: string) {
  return useQuery<IUserFull>({
    queryKey: ["admin", "users", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("User")
        .select(
          `
        *,
        difficulty: Difficulty (*),
        programming_language: ProgrammingLanguage (*),
        chapters: Chapter (
          *, 
          activity_lessons: ActivityLesson (*)
        )
      `
        )
        .eq("id", id)
        .limit(1)
        .single();

      if (error) {
        throw error;
      }

      return data;
    },
  });
}

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation<IUser, Error, IUserCreateData>({
    mutationFn: async (createdUserData: IUserCreateData) => {
      const { data, error } = await supabase
        .from("User")
        .insert([createdUserData])
        .select("*")
        .limit(1)
        .single();

      if (error) {
        throw error;
      }

      return data;
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["admin", "users"] }), // Refresh data
  });
}

export function useUpdateUserById() {
  const queryClient = useQueryClient();

  return useMutation<IUser, Error, IUserUpdateData>({
    mutationFn: async (updatedUserData: IUserUpdateData) => {
      const { data: userData, error: userError } = await supabase
        .from("User")
        .update({
          name: updatedUserData.name,
          description: updatedUserData.description,
          difficulty_id: updatedUserData.difficulty_id,
          programming_language_id: updatedUserData.programming_language_id,
        })
        .eq("id", updatedUserData.id)
        .select("*")
        .single();

      const { data: userChaptersDataFetched, error: userChaptersError } =
        await supabase
          .from("Chapter")
          .select(
            `
            id,
            user_id,
            activity_lessons: ActivityLesson (*)
          `
          )
          .eq("user_id", updatedUserData.id);

      const userChaptersData = userChaptersDataFetched as { 
        id: string;
        user_id: string;
        activity_lessons: IActivityLesson[] 
      }[];

      for (const chapter of updatedUserData.chapters) {
        if ("id" in chapter) {
          // update existing chapters
          const { error: chapterError } = await supabase
            .from("Chapter")
            .update({
              name: chapter.name,
              description: chapter.description,
              chapter_number: chapter.chapter_number,
            })
            .eq("id", chapter.id)
            .select("*")
            .order("id")
            .limit(1)
            .single();

          for (const activityLesson of chapter.activity_lessons) {
            if ("id" in activityLesson) {
              // update existing activity lessons
              const { error: activityLessonError } = await supabase
                .from("ActivityLesson")
                .update({
                  id: activityLesson.id,

                  chapter_id: chapter.id,
                  type_id: activityLesson.type_id,
                  programming_language_id:
                    activityLesson.programming_language_id,

                  slug: activityLesson.slug,
                  name: activityLesson.name,
                  description: activityLesson.description,
                  activity_lesson_number: activityLesson.activity_lesson_number,

                  content: activityLesson.content,
                  code: activityLesson.code,
                  experience: activityLesson.experience,
                })
                .eq("id", activityLesson.id)
                .select("*")
                .order("id")
                .limit(1)
                .single();

              if (activityLessonError) {
                throw activityLessonError;
              }
            } else {
              // insert new activity lessons
              const { error: activityLessonError } = await supabase
                .from("ActivityLesson")
                .insert({
                  chapter_id: chapter.id,
                  type_id: activityLesson.type_id,
                  programming_language_id:
                    activityLesson.programming_language_id,

                  slug: activityLesson.slug,
                  name: activityLesson.name,
                  description: activityLesson.description,
                  activity_lesson_number: activityLesson.activity_lesson_number,

                  content: activityLesson.content,
                  code: activityLesson.code,
                  experience: activityLesson.experience,
                })
                .select("*")
                .order("id")
                .limit(1)
                .single();

              if (activityLessonError) {
                throw activityLessonError;
              }
            }
          }

          if (chapterError) {
            throw chapterError;
          }
        } else {
          // insert new chapters
          const { data: chapterData, error: chapterError } = await supabase
            .from("Chapter")
            .insert({
              user_id: updatedUserData.id,

              name: chapter.name,
              description: chapter.description,
              chapter_number: chapter.chapter_number,
            })
            .select("*")
            .order("id")
            .limit(1)
            .single();

          for (const activityLesson of chapter.activity_lessons) {
            // insert new activity lessons
            const { error: activityLessonError } = await supabase
              .from("ActivityLesson")
              .insert({
                chapter_id: chapterData.id,
                type_id: activityLesson.type_id,
                programming_language_id: activityLesson.programming_language_id,

                slug: activityLesson.slug,
                name: activityLesson.name,
                description: activityLesson.description,
                activity_lesson_number: activityLesson.activity_lesson_number,

                content: activityLesson.content,
                code: activityLesson.code,
                experience: activityLesson.experience,
              })
              .select("*")
              .order("id")
              .limit(1)
              .single();

            if (activityLessonError) {
              throw activityLessonError;
            }
          }

          if (chapterError) {
            throw chapterError;
          }
        }

        // TODO delete chapters and activity lessons that were actually deleted
        if (userChaptersData) {
          for (const chapter of userChaptersData) {
            if (!updatedUserData.chapters.some((c) => "id" in c && c.id === chapter.id)) {
              const { error: deleteChapterError } = await supabase
                .from("Chapter")
                .delete()
                .eq("id", chapter.id)
                .select("*")
                .limit(1)
                .single();

              if (deleteChapterError) {
                throw deleteChapterError;
              }
            }
          }
        }

        if (userChaptersError) {
          throw userChaptersError;
        }
      }

      if (userError) {
        throw userError;
      }

      return userData;
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["admin", "users"] }), // Refresh data
  });
}

// Delete an item
export function useDeleteUserById() {
  const queryClient = useQueryClient();

  return useMutation<IUser, Error, string>({
    mutationFn: async (id: string) => {
      const { data, error } = await supabase
        .from("User")
        .delete()
        .eq("id", id)
        .select("*")
        .limit(1)
        .single();

      if (error) {
        throw error;
      }

      return data;
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["admin", "users"] }),
  });
}
