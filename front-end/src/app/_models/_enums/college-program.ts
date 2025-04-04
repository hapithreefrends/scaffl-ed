import { z } from 'zod';

export const collegeProgramSchema = z.object ({
    id: z.string()
        .uuid(),
    
    name: z.string()
});

export type ICollegeProgram = z.infer<typeof collegeProgramSchema>;