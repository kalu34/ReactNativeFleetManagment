import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../IconType";
const CarIcon = ({ color, height, width, ...props }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m3 11 2.48-5.788A2 2 0 0 1 7.32 4h9.362a2 2 0 0 1 1.838 1.212L21 11M3 11h18M3 11v7m18-7v7m-3 0v.5a1.5 1.5 0 0 0 1.5 1.5v0a1.5 1.5 0 0 0 1.5-1.5V18m-3 0H6m12 0h3M6 18v.5A1.5 1.5 0 0 1 4.5 20v0A1.5 1.5 0 0 1 3 18.5V18m3 0H3"
    />
    <Path
      fill={color}
      fillRule="evenodd"
      d="M3 11h18v7H3zm3 3a1 1 0 0 1 1-1h.001a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m11-1a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2z"
      clipRule="evenodd"
    />
  </Svg>
);
export default CarIcon;
