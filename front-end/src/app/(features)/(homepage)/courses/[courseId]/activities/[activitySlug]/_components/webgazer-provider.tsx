"use client";

import { createContext, useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import localforage from "localforage";

/**
 * @file WebGazerProvider.tsx
 * @description This file contains the WebGazerProvider component which loads the WebGazer library and provides context for gaze tracking calibration state.
 */

declare global {
  interface Window {
    webgazer: any;
  }
}

/**
 * @typedef WebGazerContextType
 * @property {boolean} calibrated - Indicates if the gaze tracking has been calibrated.
 * @property {Dispatch<SetStateAction<boolean>>} setCalibrated - Function to set the calibration state.
 */

/**
 * Context to provide the calibration state and setter function for WebGazer.
 */
export const WebGazerContext = createContext<{
  calibrated: boolean;
  setCalibrated: Dispatch<SetStateAction<boolean>>;
}>({
  calibrated: false,
  setCalibrated: () => {},
});

/**
 * WebGazerProvider component that loads the WebGazer library and provides context for gaze tracking calibration state.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the provider.
 * @returns {JSX.Element} The WebGazerProvider component.
 *
 * @example
 * <WebGazerProvider>
 *   <YourComponent />
 * </WebGazerProvider>
 */
export default function WebGazerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [calibrated, setCalibrated] = useState(false);

  useEffect(() => {
    const loadWebgazer = async () => {
      if (typeof window !== undefined) {
        const script = document.createElement("script");
        script.src = "https://webgazer.cs.brown.edu/webgazer.js";
        script.async = true;
        script.onload = () => {
          console.log("WebGazer script loaded");

          window.webgazer
              .setRegression("ridge")
              .setTracker("TFFacemesh")
              .applyKalmanFilter(false)
              .showVideoPreview(true)
              .begin();
        };
        document.body.appendChild(script);
      }
    };

    loadWebgazer();

    return () => {
      if (window.webgazer) {
        // FOR PERFORMANCE GAINS PARA DI NAGKUKUMPOL YUNG MGA DATA OVER TIME
        // LAHAT NG MAKITA KO SA NET PARA MATANGAL YUNG DATA SA STORAGE NANDYAN HAHAHA
        window.webgazer.end();
        indexedDB.deleteDatabase("webgazer");
        localStorage.removeItem("webgazerGlobalData");
        localforage.clear();
        indexedDB.deleteDatabase("localforage");
        console.log("DELETED!!!")
      }
    };
  }, []);

  useEffect(() => {
    if (window.webgazer) {
      window.webgazer.showVideoPreview(!calibrated); // Webcam ON when not calibrated, OFF when calibrated
      window.webgazer.applyKalmanFilter(calibrated); // Kalman ON after calibration
    }
  }, [calibrated]);

  return (
    <WebGazerContext.Provider value={{ calibrated, setCalibrated }}>
      {children}
    </WebGazerContext.Provider>
  );
}
