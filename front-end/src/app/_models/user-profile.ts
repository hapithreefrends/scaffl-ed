import { z } from 'zod';
import { sexSchema } from './_enums/sex';
import { schoolSchema } from './_enums/school';
import { collegeProgramSchema } from './_enums/college-program';

export const userProfileSchema = z.object ({
    id: z.string()
        .uuid(),

    first_name: z.string(),
    last_name: z.string(),

    birthday: z.string()
        .date(),
    
    avatar: z.string(),

    total_experience_points: z.number()
        .int(),

    streak_counter: z.number()
        .int(),
    
    last_active: z.string()
        .date(),

    sex_id: z.string()
        .uuid(),

    school_id: z.string()
        .uuid(),
    
    college_program_id: z.string()
        .uuid(),    
});

export const userProfileFullSchema = userProfileSchema.extend( {
    sex: sexSchema,
    school: schoolSchema,
    college_program: collegeProgramSchema
});

export const userProfileCreateDataSchema = userProfileSchema.omit({
    id: true,
    total_experience_points: true,
    streak_counter: true,
    last_active: true  
})

export const userProfileUpdateDataSchema = userProfileSchema.omit({
})

export type IUserProfile = z.infer<typeof userProfileSchema>;
export type IUserProfileFull = z.infer<typeof userProfileFullSchema>;

export type IUserProfileCreateData = z.infer<typeof userProfileCreateDataSchema>;
export type IUserProfileUpdateData = z.infer<typeof userProfileUpdateDataSchema>;

