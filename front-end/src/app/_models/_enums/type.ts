import { z } from 'zod';

export const typeSchema = z.object({
    id: z.number()
        .int(),

    name: z.string()
});

export type IType = z.infer<typeof typeSchema>;