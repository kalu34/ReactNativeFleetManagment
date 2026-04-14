import { Dimensions, View } from "react-native";
import AnimatedProgress from "./AnimatedProgress";
import Animated, {
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import { splashScreenData } from "../../../constant/SplasScreenData";
import Text from "../../typography/Text";
import { useTheme } from "../../../hooks/useTheme";

// Get Screen Width
const { width: SCREEN_WIDTH } = Dimensions.get("screen");
const SplashScreenSwipe = () => {
  const theme = useTheme();
  const scrollX = useSharedValue(0);

  const handleOnScroll = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  return (
    <View style={[SplashScreenSwipeStyle.container]}>
      {/* Animated Progress */}
      <AnimatedProgress scrollX={scrollX} />

      {/* FlatList to store data */}
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        pagingEnabled
        horizontal
        data={splashScreenData}
        renderItem={({ item, index }) => (
          <View style={{ width: SCREEN_WIDTH, padding: 10, gap: 10 }}>
            <Text
              fontSize={32}
              style={{ color: theme.background, fontFamily: "Helvetica-Bold" }}
            >
              {item?.title}
            </Text>
            <Text fontSize={12} style={{ color: theme.background }}>
              {item?.body}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default SplashScreenSwipe;

const SplashScreenSwipeStyle = {
  container: {
    gap: 10,
  },
};
