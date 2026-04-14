import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../IconType";

const GatePassIcon = ({ width, height, color, ...props }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 48 48" {...props}>
    <Path fill="none" d="M0 0h48v48H0z" />
    <Path
      fill={color}
      d="M24.8 27.4a4.3 4.3 0 1 1-8.5 0 4.3 4.3 0 1 1 8.5 0M46 16.9v14.2A14.9 14.9 0 0 1 31.1 46H16.9A14.9 14.9 0 0 1 2 31.1V16.9A14.9 14.9 0 0 1 16.9 2h14.2A14.9 14.9 0 0 1 46 16.9M28.9 27.4a8.4 8.4 0 1 0-8.3 8.3 8.3 8.3 0 0 0 8.3-8.3m6.9-15.1H12.4v4.1h19.2v19.1h4.2Z"
    />
  </Svg>
);
export default GatePassIcon;
