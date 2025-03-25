import { z } from 'zod';

export const userSchema = z.object({
    id: z.string()
        .uuid(),

    email: z.string()
        .email(),
    password: z.string(),

    name: z.string(),
    school: z.string(),

    birthday: z.date(),
    avatarUrl: z.string().url(),

    createdAt: z.date(),
    updatedAt: z.date()
});

export const userDataSchema = userSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true
});

export type IUser = z.infer<typeof userSchema>;
export type IUserProfile = z.infer<typeof userDataSchema>;