import { z } from 'zod';

export const programmingLanguageSchema = z.object({
    id: z.string()
        .uuid(),

    name: z.string(),

    logo: z.string()
        .url().optional(),
});

export type IProgrammingLanguage = z.infer<typeof programmingLanguageSchema>;