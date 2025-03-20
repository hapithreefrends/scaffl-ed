import { useMutation, useQuery,  useQueryClient } from "@tanstack/react-query";
import { createClient } from "@/utilities/supabase/client";
import { ICourse, ICourseCreateData, ICourseFull } from "@/app/_models/course";

const supabase = createClient();

export function useFindAllCourses() {
  return useQuery<ICourseFull[]>({
    queryKey: ["admin", "courses"],
    queryFn: async () => {
      const { data, error } = await supabase.from("Course").select(`
          *,
          difficulty: Difficulty (*),
          programming_language: ProgrammingLanguage (*)
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
        programming_language: ProgrammingLanguage (*)
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

  return useMutation<ICourse, Error, ICourse>({
    mutationFn: async (updatedCourseData: ICourse) => {
      const { data, error } = await supabase.from("Course").update(updatedCourseData).eq("id", updatedCourseData.id).select("*").limit(1).single();

      if (error) {
        throw error;
      }

      return data;
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
