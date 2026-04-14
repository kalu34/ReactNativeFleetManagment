import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../IconType";

const MapDefalutIcon = ({ width, height, color, ...props }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 16 16" {...props}>
    <Path fill="none" d="M0 0h16v16H0z" />
    <Path
      fill={color}
      d="m0 3 5-2v12l-5 2zm11 0v12l-5-1.667v-12zm5-2v12l-4 1.6v-12z"
    />
  </Svg>
);
export default MapDefalutIcon;
