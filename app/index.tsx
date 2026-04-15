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
import { useRouter } from "expo-router";

const SplashScreen = () => {
  const theme = useTheme();
  const route = useRouter();

  return (
    <View style={[SplashScreenStyle.container]}>
      <Image
        source={require("@assets/images/splash_screen_bg.jpg")}
        style={[StyleSheet.absoluteFill, { width: "100%", height: "100%" }]}
      />
      <LinearGradient
        colors={["transparent", theme.primary]}
        style={[SplashScreenStyle.contentContainer]}
        locations={[0.1, 0.8]}
      >
        <SplashScreenSwipe />

        {/* Base Button */}
        <View style={[SplashScreenStyle.baseButtonContainer]}>
          <BaseButton
            onPress={() => route.push("/(auth)/LoginScreen")}
            backgroundColor={theme.background}
          >
            <Text
              fontSize={15}
              style={{ color: theme.primary, fontFamily: "Helvetica-Bold" }}
            >
              Get Started
            </Text>
          </BaseButton>
        </View>
      </LinearGradient>
    </View>
  );
};

export default SplashScreen;

const SplashScreenStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingVertical: 30,
    gap: 15,
  },
  baseButtonContainer: {
    paddingHorizontal: 15,
  },
});
