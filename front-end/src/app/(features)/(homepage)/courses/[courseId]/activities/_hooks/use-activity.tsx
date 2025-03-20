"use client";
import { createClient } from "@/utilities/supabase/client";
import { useSuspenseQuery } from "@tanstack/react-query";

async function fetchActivityDetails(activitySlug: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("ActivityLesson")
    .select("*")
    .eq("slug", activitySlug)
    .limit(1)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export default function useActivity(activitySlug: string) {
  return useSuspenseQuery({
    queryKey: ["activity", activitySlug],
    queryFn: () => fetchActivityDetails(activitySlug),
  });
}

