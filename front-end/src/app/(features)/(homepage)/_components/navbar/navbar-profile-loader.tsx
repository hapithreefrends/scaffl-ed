'use client'

import { lazy } from "react";

import { useSuspenseQuery } from "@tanstack/react-query";
import { createClient } from "@/utilities/supabase/client";
import { userProfileSchema } from "@/app/_models/user_profile";
import { IUserProfile } from "@/app/_models/user_profile";

// Simulates a delay in loading the NavbarProfile component
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Applies the simulated delay
const LazyNavbarProfile = lazy(() =>
  wait(2000).then(() => import("./navbar-profile-info"))
);

const user = {
  name: "John Doe",
  avatar: "https://i.pinimg.com/736x/5d/25/29/5d252925e2700fe695fa8097541d9b93.jpg",
  honor: "Explorer",
  href: ""
};

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
const { data } = useSuspenseQuery<IUserProfile> ({
    queryKey: ["profile"],
    queryFn: () => fetchUserProfile()
  })

  return <LazyNavbarProfile 
    name={`${data.first_name} ${data.last_name}`}
    avatar={data.avatar ?? "https://i.pinimg.com/736x/5d/25/29/5d252925e2700fe695fa8097541d9b93.jpg"}
    honor={"PLACEHOLDER"}
    href={""} 
  />;
}
