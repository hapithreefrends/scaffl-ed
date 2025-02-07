import { Suspense } from "react";
import NavbarProfile from "./navbar-profile-info";
import NavbarProfileSkeleton from "./loading";

export default async function NavbarProfileLoader() {
  const user = await fetchUserProfile();

  return (
    <Suspense fallback={<NavbarProfileSkeleton />}>
      <NavbarProfile {...user} />
    </Suspense>
  );
}

const fetchUserProfile = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return {
    name: "John Doe",
    avatar: "",
    honor: "Explorer",
  };
};
