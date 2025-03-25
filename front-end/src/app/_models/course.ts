import { z } from 'zod';

import { difficultySchema } from './_enums/difficulty';
import { programmingLanguageSchema } from './_enums/programming-language';
import { chapterCreateDataSchema, chapterSchema, chapterUpdateDataSchema } from './chapter';

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
});

export const courseFullSchema = courseSchema.extend({
    difficulty: difficultySchema,
    programming_language: programmingLanguageSchema,

    chapters: z.array(chapterSchema),
});

export const courseCreateDataSchema = courseSchema.omit({
    id: true,
    experience: true
});

export const courseUpdateDataSchema = courseSchema.omit({
    experience: true
}).extend({
    chapters: z.array(chapterCreateDataSchema.or(chapterUpdateDataSchema)),
});

export type ICourse = z.infer<typeof courseSchema>;
export type ICourseFull = z.infer<typeof courseFullSchema>;

export type ICourseCreateData = z.infer<typeof courseCreateDataSchema>;
export type ICourseUpdateData = z.infer<typeof courseUpdateDataSchema>;