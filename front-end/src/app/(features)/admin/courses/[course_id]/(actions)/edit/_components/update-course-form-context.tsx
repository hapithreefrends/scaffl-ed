import { createFormContext } from "@mantine/form";

import { ICourseUpdateData } from "@/app/_models/course";

export const [UpdateCourseFormProvider, useUpdateCourseFormContext, useUpdateCourseForm] = createFormContext<ICourseUpdateData>(); 