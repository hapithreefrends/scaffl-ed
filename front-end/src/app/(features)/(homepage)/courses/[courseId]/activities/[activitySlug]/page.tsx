"use client";

import { Suspense } from "react";
import ActivityEnvironment from "./activity-environment";
import ActivityLoading from "./_components/activity-loading";
import useWebGazer from "./_hooks/use-webgazer";
import Calibration from "./_components/calibration";

export default function ActivityTopLevel() {
  const {calibrated} = useWebGazer();

  console.log("CALIBRATED:", calibrated)

  return (
    <Suspense fallback={<ActivityLoading/>}>
      { calibrated ? <ActivityEnvironment/> : <Calibration/> }
      {/* <ActivityEnvironment/> */}
    </Suspense>
  );
}
