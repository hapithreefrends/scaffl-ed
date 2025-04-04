import { z } from 'zod';

export const accountStatusSchema = z.object ({
    id: z.string()
        .uuid(),
    
    name: z.string()
});

export type IAccountStatus = z.infer<typeof accountStatusSchema>;