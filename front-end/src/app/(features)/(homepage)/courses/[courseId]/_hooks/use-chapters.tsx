import { useSuspenseQuery } from "@tanstack/react-query";
import { createClient } from "@/utilities/supabase/client";

export default function useChapter(chapterid: string) {
  return useSuspenseQuery({
    queryKey: ["chapters", chapterid],
    queryFn: async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("Chapter")
        .select(
          `
                *,
                modules: ActivityLesson(*)
            `
        )
        .eq("id", chapterid)
        .limit(1)
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
  });
}
