import { z } from 'zod';

export const courseSchema = z.object({
    id: z.string()
        .uuid(),

    name: z.string(),
    description: z.string(),

    experience: z.number()
        .int(),

    difficultyId: z.number()
        .int(),
    programmingLanguageId: z.number()
        .int(),

    // createdAt: z.date()
});

export const courseDataSchema = courseSchema.omit({
    id: true,
    experience: true
})

export type ICourse = z.infer<typeof courseSchema>;
export type ICourseData = z.infer<typeof courseDataSchema>;