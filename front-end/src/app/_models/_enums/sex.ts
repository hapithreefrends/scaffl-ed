import { z } from 'zod';

export const sexSchema = z.object ({
    id: z.string()
        .uuid(),
    
    name: z.string()
});

export type ISex = z.infer<typeof sexSchema>;