import { createFormContext } from "@mantine/form";

import { IUserProfileUpdateData } from "@/app/_models/user-profile";

export const [UpdateUserProfileFormProvider, useUpdateUserProfileFormContext, useUpdateUserProfileForm] = createFormContext<IUserProfileUpdateData>(); 