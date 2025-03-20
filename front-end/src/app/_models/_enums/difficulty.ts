import { z } from 'zod';

export const difficultySchema = z.object({
    id: z.number()
        .int(),

    name: z.string()
});

export type IDifficulty = z.infer<typeof difficultySchema>;