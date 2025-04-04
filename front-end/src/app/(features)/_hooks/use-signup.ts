"use client";

import { createClient } from "@/utilities/supabase/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const supabase = createClient();

export function useSignup() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      return await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authenticated-user"] });
    },
    onError: (error) => {
      console.error(error);
    },
    onSettled: () => {
      console.log("Login mutation settled");
    },
  });
}
