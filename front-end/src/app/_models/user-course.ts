import { z } from 'zod';
import { userSchema } from './user';
import { courseSchema } from './course';

export const userCourseSchema = z.object ({
    id: z.string()
        .uuid(),

    user_id: z.string()
        .uuid(),

    course_id: z.string()
        .uuid(),
    
    progress: z.number()
        .int(),
});

export const userCourseFullSchema = userCourseSchema.extend({
    user: userSchema,
    course: courseSchema,
});

export const userCourseCreateDataSchema = userCourseSchema.omit({
    progress: true
})

export const userCourseUpdateDataSchema = userCourseSchema.omit({
})

export type IUserCourse = z.infer<typeof userCourseSchema>;
export type IUserCourseFull = z.infer<typeof userCourseFullSchema>;

export type IUserCourseCreateData = z.infer<typeof userCourseCreateDataSchema>;
export type IUserCourseUpdateData = z.infer<typeof userCourseUpdateDataSchema>;