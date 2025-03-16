import { useSuspenseQuery } from "@tanstack/react-query";
import { createClient } from "@/utilities/supabase/client";

export default function useContent(id: string) {
    return (
        useSuspenseQuery({
            queryKey: ["content", id],
            queryFn: async () => {
                const supabase = createClient();
                const { data, error } = await supabase
                    .from("ActivityLesson")
                    .select(
                        `
                            *,
                            type: Type(name)
                        `
                    )
                    .eq("id", id)
                    .limit(1)
                    .single();

                if (error) {
                    throw new Error(error.message);
                }

                return data;
            }
        })
    )
}