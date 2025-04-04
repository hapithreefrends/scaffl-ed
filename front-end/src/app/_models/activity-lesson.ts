import { z } from "zod";
import { programmingLanguageSchema } from "./_enums/programming-language";
import { typeSchema } from "./_enums/type";

export const activityLessonSchema = z.object({
    id: z.string()
        .uuid(),

    chapter_id: z.string()
        .uuid(),
    type_id: z.number()
        .int(),
    programming_language_id: z.string().uuid().optional(),

    slug: z.string(),
    name: z.string(),
    description: z.string()
        .optional(),
    
    activity_lesson_number: z.number()
        .int(),

    content: z.string()
        .optional(),
    code: z.string()
        .optional(),
    experience: z.number()
        .int(),
});

export const activityLessonFullSchema = activityLessonSchema.extend({
    type: typeSchema,
    programming_language: programmingLanguageSchema,
});

export const activityLessonCreateDataSchema = activityLessonSchema.omit({
    id: true,
    chapter_id: true,
});

export const activityLessonUpdateDataSchema = activityLessonSchema.omit({});

export type IActivityLesson = z.infer<typeof activityLessonSchema>;
export type IActivityLessonFull = z.infer<typeof activityLessonFullSchema>;

export type IActivityLessonCreateData = z.infer<typeof activityLessonCreateDataSchema>;
export type IActivityLessonUpdateData = z.infer<typeof activityLessonUpdateDataSchema>;


