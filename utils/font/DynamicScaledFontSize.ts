import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDHT } = Dimensions.get("window");
const BASEWIDHT = 375;
const SCALE_FACTOR = 0.5;

export const dynamicScaledFontSize = (size: number) => {
  const scaleRation = SCREEN_WIDHT / BASEWIDHT;

  const fontSize = size + (scaleRation * size - size) * SCALE_FACTOR;

  return Math.round(PixelRatio.roundToNearestPixel(fontSize));
};
