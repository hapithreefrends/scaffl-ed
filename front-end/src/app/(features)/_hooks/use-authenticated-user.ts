import { IUserFull } from "@/app/_models/user";
import { createClient } from "@/utilities/supabase/client";
import { useQuery } from "@tanstack/react-query";

const supabase = createClient();

export function useAuthenticatedUser() {
  return useQuery<IUserFull>({
    queryKey: ["authenticated-user"],
    queryFn: async () => {
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
                  college_program: CollegeProgram (*)
              )
          `
          )
          .limit(1)
          .single();
  
        if (error) {
          throw error;
        }

      return data;
    },
  });
}
