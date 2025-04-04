import { z } from 'zod';

export const schoolSchema = z.object ({
    id: z.string()
        .uuid(),
    
    name: z.string()
});

export type ISchool = z.infer<typeof schoolSchema>;