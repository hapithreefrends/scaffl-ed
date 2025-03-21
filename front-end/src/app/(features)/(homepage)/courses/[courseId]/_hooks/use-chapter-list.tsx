import { useSuspenseQuery } from "@tanstack/react-query";
import { createClient } from "@/utilities/supabase/client";

export default function useChapterList(courseId: string) {
  return useSuspenseQuery({
    queryKey: ["courses", courseId, "chapters"],
    queryFn: async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("Chapter")
        .select(
          `
                *
            `
        )
        .eq("course_id", courseId)
        .order("chapter_number", { ascending: true });

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
  });
}
