import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../IconType";
const NotificationIcon = ({ width, height, color, ...props }: IconProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    data-name="Flat Color"
    {...props}
  >
    <Path d="M15 17H9a1 1 0 0 0-1 1 4 4 0 0 0 8 0 1 1 0 0 0-1-1" fill={color} />
    <Path
      fill={color}
      d="M20.09 13.67 19 12.59V9A7 7 0 0 0 5 9v3.59l-1.09 1.08A3.13 3.13 0 0 0 6.12 19h11.76a3.13 3.13 0 0 0 2.21-5.33"
    />
  </Svg>
);
export default NotificationIcon;
