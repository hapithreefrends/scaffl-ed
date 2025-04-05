import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  // DISABLES RENDERING COMPONENTS TWICE, 
  // CAPTURE UNINTNDED SIDE EFFECTS WHEN IT'S ON,
  // BUT MAKES WEBGAZER INITIALIZE TWICE, RENDERING TWO DOTS AND SEVERLY AFFECTING PERFORMANCE
};

export default nextConfig;
