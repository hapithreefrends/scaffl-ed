'use client'

import { useSuspenseQuery } from "@tanstack/react-query";
import { createClient } from "@/utilities/supabase/client";
import { IUserProfile } from "@/app/_models/user-profile";
import NavbarProfile from "./navbar-profile-info";
import { Suspense } from "react";
import NavbarProfileSkeleton from "./navbar-profile-skeleton";

const fetchUserProfile = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.from("UserProfile").select(`
    *
    `
  ).limit(1).single();

  if (error) {
    throw error;
  }

  return data;
}

// Should contain the real-life implementation of fetching user data
export default function NavbarProfileLoader() {
  const { data } = useSuspenseQuery<IUserProfile>({
    queryKey: ["profile"],
    queryFn: () => fetchUserProfile()
  })

  return <Suspense fallback={<NavbarProfileSkeleton />}>
    <NavbarProfile
      name={`${data?.first_name} ${data?.last_name}`}
      avatar={data?.avatar ?? "https://i.pinimg.com/736x/5d/25/29/5d252925e2700fe695fa8097541d9b93.jpg"}
      honor={"PLACEHOLDER"}
      href={""}
    />
  </Suspense>;
}
