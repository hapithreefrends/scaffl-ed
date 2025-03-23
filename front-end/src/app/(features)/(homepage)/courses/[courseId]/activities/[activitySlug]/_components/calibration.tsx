"use client";

import useWebGazer from "../_hooks/use-webgazer";
import CalibrationPoint from "./calibration-point";
import classes from "../_styles/calibration.module.css"
import { useState, useEffect } from "react";
import {
  SimpleGrid
} from "@mantine/core";

// TODO
export default function Calibration() {
  const { setCalibrated } = useWebGazer();
  const [pointsClicked, setPointsClicked] = useState(1);
  const cols = 4;
  const totalPoints = cols * cols;

  const incrementPointsClicked = () => {
    // console.log("POINTS CLICKS BEFORE",pointsClicked)
    setPointsClicked((prev) => prev + 1)
    if (pointsClicked === totalPoints) setCalibrated(true)
    // console.log("POINTS CLICKS",pointsClicked)
    // console.log("CALIBRATION DONE!!")
}

//   console.log("GRIDDDDD");
  return (
    <SimpleGrid className={classes.calibrationContainer} cols={cols} h="100vh" w="100vw" p="sm">
        {Array.from(Array(totalPoints)).map((_, index) => (
            <CalibrationPoint key={index} onPointClick={incrementPointsClicked}/>
        ))}
    </SimpleGrid>
  );
}
