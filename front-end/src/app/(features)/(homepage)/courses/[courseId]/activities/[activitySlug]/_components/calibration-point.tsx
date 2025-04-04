"use client";

import { useState } from "react";
import { Box } from "@mantine/core";
import classes from "../_styles/calibration-points.module.css"

export default function CalibrationPoint({onPointClick} : {onPointClick: () => void}) {
  const maximumClicks: number = 5;
  const [timesClicked, setTimesClicked] = useState<number>(0);
  const [isDonePoint, setIsDonePoint] = useState<boolean>(false);
  const incrementTimesClicked = () => {
    if (!isDonePoint) setTimesClicked((prev) => prev + 1)
    if (timesClicked === maximumClicks) {
        setIsDonePoint(true)
        onPointClick()
    }
  }
  return (
    <Box
      className={classes.calibrationPoint}
      onClick={incrementTimesClicked}
      bg={
        !timesClicked
          ? "gray.5"
          : isDonePoint
          ? "green.5"
          : timesClicked < 0 || timesClicked > 5
          ? "dark.0"
          : `red.${timesClicked}`
      }
      h="15px"
      w="15px"
    ></Box>
  );
}
