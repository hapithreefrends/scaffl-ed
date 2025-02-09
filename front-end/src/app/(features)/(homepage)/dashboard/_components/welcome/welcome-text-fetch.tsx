import { lazy } from "react";

// Simulates a delay in loading the WelcomeText component
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Applies the simulated delay
const LazyCoursesList = lazy(() =>
  wait(8000).then(() => import("./welcome-text"))
);

const mockData = {
    name: "Adrian",
    affirmation: "To be or not to be, that is the question",
};

// in reality does the actual fetching
export default async function WelcomeTextLoader() {
  return (
    <LazyCoursesList {...mockData}/>
  );
}


