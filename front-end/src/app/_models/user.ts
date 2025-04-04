import { z } from "zod";
import { accountStatusSchema } from "./_enums/account-status";
import { userRoleSchema } from "./_enums/user-role";
import { userProfileFullSchema, userProfileUpdateDataSchema } from "./user-profile";

export const userSchema = z.object({
    id: z.string()
        .uuid(),

    
    auth_user_id: z.string().uuid(),

    account_status_id: z.string().uuid(),
    user_role_id: z.string().uuid(),
});

export const userFullSchema = userSchema.extend({
    account_status: accountStatusSchema,
    user_role: userRoleSchema,
    profile: userProfileFullSchema
});

export const userCreateDataSchema = userSchema.omit({
    id: true,
    auth_user_id: true,
});

export const userUpdateDataSchema = userSchema.omit({}).extend({
    profile: userProfileUpdateDataSchema,
});

export type IUser = z.infer<typeof userSchema>;
export type IUserFull = z.infer<typeof userFullSchema>;

export type IUserCreateData = z.infer<typeof userCreateDataSchema>;
export type IUserUpdateData = z.infer<typeof userUpdateDataSchema>;