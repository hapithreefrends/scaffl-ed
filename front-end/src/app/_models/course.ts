import { z } from 'zod';
import { difficultySchema } from './_enums/difficulty';
import { programmingLanguageSchema } from './_enums/programming-language';

export const courseSchema = z.object({
    id: z.string()
        .uuid(),

    name: z.string(),
    description: z.string(),

    experience: z.number()
        .int(),

    difficulty_id: z.number()
        .int(),
    programming_language_id: z.string()
        .uuid(),

    // createdAt: z.date()
});

export const courseFullSchema = courseSchema.extend({
    difficulty: difficultySchema,
    programming_language: programmingLanguageSchema
});

export const courseCreateDataSchema = courseSchema.omit({
    id: true,
    experience: true
})

// TODO
export const courseUpdateDataSchema = courseCreateDataSchema.extend({
    id: z.string()
        .uuid(),
    
    chapter: z.object({
        id: z.string()
            .uuid(),
        name: z.string()
    })
});

export type ICourse = z.infer<typeof courseSchema>;
export type ICourseFull = z.infer<typeof courseFullSchema>;

export type ICourseCreateData = z.infer<typeof courseCreateDataSchema>;