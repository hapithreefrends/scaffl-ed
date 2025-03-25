import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createClient } from "@/utilities/supabase/client";
import { ICourse, ICourseCreateData, ICourseFull, ICourseUpdateData } from "@/app/_models/course";

const supabase = createClient();

export function useFindAllCourses() {
  return useQuery<ICourseFull[]>({
    queryKey: ["admin", "courses"],
    queryFn: async () => {
      const { data, error } = await supabase.from("Course").select(`
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

export function useFindCourseById(id: string) {
  return useQuery<ICourseFull>({
    queryKey: ["admin", "courses", id],
    queryFn: async () => {
      const { data, error } = await supabase.from("Course").select(`
        *,
        difficulty: Difficulty (*),
        programming_language: ProgrammingLanguage (*),
        chapters: Chapter (
          *, 
          activity_lessons: ActivityLesson (*)
        )
      `).eq("id", id).limit(1).single();

      if (error) {
        throw error;
      }

      return data;
    }
  });
}

export function useCreateCourse() {
  const queryClient = useQueryClient();

  return useMutation<ICourse, Error, ICourseCreateData>({
    mutationFn: async (createdCourseData: ICourseCreateData) => {
      const { data, error } = await supabase.from("Course").insert([createdCourseData]).select("*").limit(1).single();

      if (error) {
        throw error;
      }

      return data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["admin", "courses"] }), // Refresh data
  });
}

export function useUpdateCourseById() {
  const queryClient = useQueryClient();

  return useMutation<ICourse, Error, ICourseUpdateData>({
    mutationFn: async (updatedCourseData: ICourseUpdateData) => {
      const { data: courseData, error: courseError } = await supabase
        .from("Course")
        .update({
          name: updatedCourseData.name,
          description: updatedCourseData.description,
          difficulty_id: updatedCourseData.difficulty_id,
          programming_language_id: updatedCourseData.programming_language_id,
        })
        .eq("id", updatedCourseData.id)
        .select("*").single();

      for (const chapter of updatedCourseData.chapters) {
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
            .select("*").order("id").limit(1).single();

          for (const activityLesson of chapter.activity_lessons) {
            if ("id" in activityLesson) {
              // update existing activity lessons
              const { error: activityLessonError } = await supabase
                .from("ActivityLesson")
                .update({
                  id: activityLesson.id,

                  chapter_id: chapter.id,
                  type_id: activityLesson.type_id,
                  programming_language_id: activityLesson.programming_language_id,

                  slug: activityLesson.slug,
                  name: activityLesson.name,
                  description: activityLesson.description,

                  content: activityLesson.content,
                  code: activityLesson.code,
                  experience: activityLesson.experience,
                })
                .eq("id", activityLesson.id)
                .select("*").order("id").limit(1).single();

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
                  programming_language_id: activityLesson.programming_language_id,

                  slug: activityLesson.slug,
                  name: activityLesson.name,
                  description: activityLesson.description,

                  content: activityLesson.content,
                  code: activityLesson.code,
                  experience: activityLesson.experience,
                })
                .select("*").order("id").limit(1).single();

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
              course_id: updatedCourseData.id,

              name: chapter.name,
              description: chapter.description,
              chapter_number: chapter.chapter_number,
            })
            .select("*").order("id").limit(1).single();

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

                content: activityLesson.content,
                code: activityLesson.code,
                experience: activityLesson.experience,
              })
              .select("*").order("id").limit(1).single();

            if (activityLessonError) {
              throw activityLessonError;
            }
          }

          if (chapterError) {
            throw chapterError;
          }
        }

        // TODO delete chapters and activity lessons that were actually deleted

      }



      if (courseError) {
        throw courseError;
      }

      return courseData;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["admin", "courses"] }), // Refresh data
  });
}

// Delete an item
export function useDeleteCourseById() {
  const queryClient = useQueryClient();

  return useMutation<ICourse, Error, string>({
    mutationFn: async (id: string) => {
      const { data, error } = await supabase.from("Course").delete().eq("id", id).select("*").limit(1).single();

      if (error) {
        throw error;
      }

      return data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["admin", "courses"] }),
  });
}
