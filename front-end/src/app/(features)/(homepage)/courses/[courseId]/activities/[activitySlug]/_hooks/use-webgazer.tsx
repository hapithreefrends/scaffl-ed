/**
 * Custom hook to access the WebGazer context.
 *
 * This hook provides access to the WebGazerContext, which can be used to interact with the WebGazer functionality.
 *
 * @returns {WebGazerContext} The current WebGazer context value.
 */
"use client"

import { useContext } from "react";
import { WebGazerContext } from "../_components/webgazer-provider";

export const useWebGazer = () => useContext(WebGazerContext);

export default useWebGazer;