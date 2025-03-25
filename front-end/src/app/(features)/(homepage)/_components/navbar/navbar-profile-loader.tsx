import { lazy } from "react";

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

// Should contain the real-life implementation of fetching user data
export default async function NavbarProfileLoader() {
  return <LazyNavbarProfile {...user} />;
}
