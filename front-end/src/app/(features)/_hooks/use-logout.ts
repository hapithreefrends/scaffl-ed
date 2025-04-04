"use client";

import { createClient } from "@/utilities/supabase/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const supabase = createClient();

export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const { error } = await supabase.auth.signOut();

      if (error) {
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authenticated-user"] });
    },
    onError: (error) => {
      console.error("Logout error:", error);
    },
    onSettled: () => {
      console.log("Logout mutation settled");
    },
  });
}
