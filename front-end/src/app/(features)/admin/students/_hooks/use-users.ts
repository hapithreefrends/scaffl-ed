import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createClient } from "@/utilities/supabase/client";
import {
  IUser,
  IUserCreateData,
  IUserFull,
  IUserUpdateData,
} from "@/app/_models/user";

const supabase = createClient();

export function useFindAllUsers() {
  return useQuery<IUserFull[]>({
    queryKey: ["admin", "users"],
    queryFn: async () => {
      const { data, error } = await supabase.from("User").select(`
          *,
          account_status: AccountStatus (*),
          user_role: UserRole (*),
          profile: UserProfile (
              *,
              sex: Sex (*),
              school: School (*),
              college_program: CollegeProgram (*)
          )
        `);

      if (error) {
        throw error;
      }

      return data;
    },
  });
}

export function useFindUserById(id: string) {
  return useQuery<IUserFull>({
    queryKey: ["admin", "users", id],
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
        .eq("id", id)
        .limit(1)
        .single();

      if (error) {
        throw error;
      }

      return data;
    },
  });
}

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation<IUser, Error, IUserCreateData>({
    mutationFn: async (createdUserData: IUserCreateData) => {
      const { data, error } = await supabase
        .from("User")
        .insert([createdUserData])
        .select("*")
        .limit(1)
        .single();

      if (error) {
        throw error;
      }

      return data;
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["admin", "users"] }), // Refresh data
  });
}

export function useUpdateUserById() {
  const queryClient = useQueryClient();

  return useMutation<IUser, Error, IUserUpdateData>({
    mutationFn: async (updatedUserData: IUserUpdateData) => {
      const { data: userData, error: userError } = await supabase
        .from("User")
        .update({
          account_status_id: updatedUserData.account_status_id,
          user_role_id: updatedUserData.user_role_id,
        })
        .eq("id", updatedUserData.id)
        .select("*")
        .single();

      const { data: profileData, error: profileError } = await supabase
        .from("UserProfile")
        .update({
          first_name: updatedUserData.profile.first_name,
          last_name: updatedUserData.profile.last_name,
          birthday: updatedUserData.profile.birthday,
          avatar: updatedUserData.profile.avatar,
          total_experience_points:
            updatedUserData.profile?.total_experience_points ?? 0,
          streak_counter: updatedUserData.profile?.streak_counter ?? 0,
          last_active:
            updatedUserData.profile?.last_active ?? new Date().toISOString(),
          sex_id: updatedUserData.profile,
        })
        .eq("id", updatedUserData.profile.id)
        .select("*")
        .single();

      if (userError) {
        throw userError;
      }

      if (profileError) {
        throw profileError;
      }

      return {...userData, profile: profileData};
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["admin", "users"] }), // Refresh data
  });
}

// Delete an item
export function useDeleteUserById() {
  const queryClient = useQueryClient();

  return useMutation<IUser, Error, string>({
    mutationFn: async (id: string) => {
      const { data, error } = await supabase
        .from("User")
        .delete()
        .eq("id", id)
        .select("*")
        .limit(1)
        .single();

      if (error) {
        throw error;
      }

      return data;
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["admin", "users"] }),
  });
}
