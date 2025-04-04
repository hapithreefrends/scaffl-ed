import { z } from 'zod';

export const degreeProgramSchema = z.object ({
    id: z.string()
        .uuid(),
    
    name: z.string()
});

export type IDegreeProgram = z.infer<typeof degreeProgramSchema>;