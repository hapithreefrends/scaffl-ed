import { IUserFull } from "@/app/_models/user";
import { createClient } from "@/utilities/supabase/client";
import { useQuery } from "@tanstack/react-query";

const supabase = createClient();

export function useAuthenticatedUser() {
  return useQuery<IUserFull>({
    queryKey: ["authenticated-user"],
    queryFn: async () => {
        const { data: sessionData } = await supabase.auth.getUser();

        const { data, error } = await supabase
          .from("User")
          .select(
            `
              *,
              account_status: AccountStatus (*),
              user_role: UserRole (*),
              profile: UserProfile (
                  *,
                  sex: Sex (*),
                  school: School (*),
                  college_program: DegreeProgram (*)
              )
          `
          )
          .eq("auth_user_id", sessionData?.user?.id)
          .order("id")
          .limit(1)
          .single();
  
        if (error) {
          throw error;
        }

      return data;
    },
  });
}
