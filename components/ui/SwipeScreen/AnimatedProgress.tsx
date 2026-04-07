import { StyleSheet, View } from "react-native";
import Animated, { SharedValue } from "react-native-reanimated";
import { splashScreenData } from "../../../constant/SplasScreenData";
import AnimatedBar from "./AnimatedBar";

interface AnimatedProgressProps {
  scrollX: SharedValue<number>
}

const AnimatedProgress = ({scrollX} : AnimatedProgressProps) => {
  return (
    <View style={[AnimatedProgressStyle.container]}>
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{gap: 5}}
        data={splashScreenData}
        renderItem={({ index }) => <AnimatedBar index={index} scrollX={scrollX}/>}
      />
    </View>
  );
};

export default AnimatedProgress;

const AnimatedProgressStyle = StyleSheet.create({
  container: {
    height: 10,
    paddingHorizontal: 10,
  },
});
