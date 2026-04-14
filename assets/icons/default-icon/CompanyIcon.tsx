import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../IconType";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const CompanyIcon = ({ width, height, color, ...props }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 36 36" {...props}>
    <Path
      fill={color}
      d="M31 8h-9v25h11V10a2 2 0 0 0-2-2m-5 17h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm4 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Z"
    />
    <Path
      fill={color}
      d="M17.88 3H6.12A2.12 2.12 0 0 0 4 5.12V33h5v-3h6v3h5V5.12A2.12 2.12 0 0 0 17.88 3M9 25H7v-2h2Zm0-5H7v-2h2Zm0-5H7v-2h2Zm0-5H7V8h2Zm4 15h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2V8h2Zm4 15h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2V8h2Z"
    />
    <Path fill="none" d="M0 0h36v36H0z" />
  </Svg>
);
export default CompanyIcon;
