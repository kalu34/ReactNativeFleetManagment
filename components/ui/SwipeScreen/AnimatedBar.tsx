import { AnimatedProp, Extrapolate } from "@shopify/react-native-skia";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useTheme } from "../../../hooks/useTheme";

interface AnimatedBarProps {
  scrollX: SharedValue<number>;
  index: number;
}

const { width: SCREEN_WIDTH } = Dimensions.get("screen");
const AnimatedBar = ({ scrollX, index }: AnimatedBarProps) => {
  const theme = useTheme();
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(
        scrollX.value, // 0-1200
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [10, 20, 10],
        Extrapolate.CLAMP,
      ),
      backgroundColor: interpolateColor(
        scrollX.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [theme.muted, theme.foreground, theme.muted],
      ),
    };
  });
  return (
    <Animated.View
      style={[AnimatedBarStyle.container, animatedStyle]}
    ></Animated.View>
  );
};

export default AnimatedBar;

const AnimatedBarStyle = StyleSheet.create({
  container: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "green",
  },
});
