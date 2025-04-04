import { z } from 'zod';

export const userRoleSchema = z.object ({
    id: z.string()
        .uuid(),
    
    name: z.string()
});

export type IUserRole = z.infer<typeof userRoleSchema>;