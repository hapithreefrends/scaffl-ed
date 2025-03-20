// 'use client';

import { Suspense } from "react";
import ActivityEnvironment from "./activity-environment";
import ActivityLoading from "./_components/activity-loading";

export default function ActivityTopLevel() {
  return (
    <Suspense fallback={<ActivityLoading/>}>
      <ActivityEnvironment />
    </Suspense>
  );
}
