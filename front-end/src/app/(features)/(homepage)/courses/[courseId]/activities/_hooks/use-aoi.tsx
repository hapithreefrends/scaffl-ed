import { createClient } from "@/utilities/supabase/client";
import { useSuspenseQuery } from "@tanstack/react-query";

async function fetchAoi(activityId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("AreaOfInterests")
    .select("*")
    .eq("activity_lesson_id", activityId)

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export default function useAoi(activityId: string) {
  return useSuspenseQuery({
    queryKey: ["activity", activityId],
    queryFn: () => fetchAoi(activityId),
  });
}

