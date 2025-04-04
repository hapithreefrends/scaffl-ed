import { createClient } from "@/utilities/supabase/client";
import { useSuspenseQuery } from "@tanstack/react-query";

async function fetchCourseHeader(courseId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("Course")
    .select(
      `
          name,
          description
        `
    )
    .eq("id", courseId)
    .limit(1)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export default function useCourseHeader(courseId: string) {
    return (
        useSuspenseQuery({
            queryKey: ["courses", courseId],
            queryFn: () => fetchCourseHeader(courseId)
        })
    )
}