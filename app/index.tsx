import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import { useTheme } from "../hooks/useTheme";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Text from "../components/typography/Text";
import SplashScreenSwipe from "../components/ui/SwipeScreen/SplashScreenSwipe";
import BaseButton from "../components/button/BaseButton";

const { width: SCREEN_WIDTH, height: SCREEN_HEIHGT } = Dimensions.get("screen");
const SplashScreen = () => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={[
        SplashScreenStyle.container,
        { backgroundColor: theme.background },
      ]}
    >
      {/* Background Image Container */}
      <ImageBackground
        source={require("../assets/images/splash_screen_bg.jpg")}
        style={{ flex: 1 }}
        imageStyle={{
          resizeMode: "cover",
          top: "-20%",
          height: "100%",
        }}
      >
        <LinearGradient
          colors={["transparent", theme.primary]}
          style={[SplashScreenStyle.contentContainer]}
          locations={[0.1, 0.8]}
        >
          <SplashScreenSwipe />

          {/* Base Button */}
          <View style={[SplashScreenStyle.baseButtonContainer]}>
            <BaseButton
              onPress={() => console.log("")}
              backgroundColor={theme.background}
            >
              <Text
                fontSize={15}
                style={{ color: theme.primary, fontFamily: "-Black" }}
              >
                Get Started
              </Text>
            </BaseButton>
          </View>
        </LinearGradient>
      </ImageBackground>

      {/* Expo Gradeint */}
    </SafeAreaView>
  );
};

export default SplashScreen;

const SplashScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingVertical: 30,
    gap: 15,
  },
  baseButtonContainer: {
    paddingHorizontal: 10,
  },
});
