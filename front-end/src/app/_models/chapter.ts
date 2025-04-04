import { z } from "zod";
import { activityLessonCreateDataSchema, activityLessonSchema, activityLessonUpdateDataSchema } from "./activity-lesson";

export const chapterSchema = z.object({
    id: z.string()
        .uuid(),
    
    course_id: z.string()
        .uuid(),

    name: z.string(),
    description: z.string(),

    chapter_number: z.number()
        .int(),
    experience: z.number()
        .int(),
});

export const chapterFullSchema = chapterSchema.extend({
    activity_lessons: z.array(activityLessonSchema),
});

export const chapterCreateDataSchema = chapterSchema.omit({
    id: true,
    course_id: true,
    experience: true
}).extend({
    activity_lessons: z.array(activityLessonCreateDataSchema),
});

export const chapterUpdateDataSchema = chapterSchema.omit({
    experience: true
}).extend({
    activity_lessons: z.array(activityLessonCreateDataSchema.or(activityLessonUpdateDataSchema)),
});

export type IChapter = z.infer<typeof chapterSchema>;
export type IChapterFull = z.infer<typeof chapterFullSchema>;

export type IChapterCreateData = z.infer<typeof chapterCreateDataSchema>;
export type IChapterUpdateData = z.infer<typeof chapterUpdateDataSchema>;

