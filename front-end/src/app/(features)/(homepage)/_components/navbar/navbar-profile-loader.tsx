import { lazy } from "react";

// Simulates a delay in loading the NavbarProfile component
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Applies the simulated delay
const LazyNavbarProfile = lazy(() =>
  wait(2000).then(() => import("./navbar-profile-info"))
);

const user = {
  name: "John Doe",
  avatar: "",
  honor: "Explorer",
};

// Should contain the real-life implementation of fetching user data
export default async function NavbarProfileLoader() {
  return <LazyNavbarProfile {...user} />;
}
