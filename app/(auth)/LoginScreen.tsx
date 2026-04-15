import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import Text from "@/components/typography/Text";
import BaseTextInput from "@/components/input/BaseTextInput";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchemaType, LoginSchema } from "@/schema/auth/login.schema";
import BaseButton from "@/components/button/BaseButton";
import BackgroundVideo from "@/components/screen/login/BackgroundVideo";
import ParticleBackground from "@/components/ui/SwipeScreen/Particle/ParticleBackground";

const LoginScreen = () => {
  const theme = useTheme();
  const { control, handleSubmit } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const login = () => {};

    return (
      <>
        <ParticleBackground />
      </>
    );
};

export default LoginScreen;

const LoginScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  backgroundContainer: {
    width: "100%",
    padding: 5,
    borderRadius: 25,
  },
  bannerContainer: {
    width: "100%",
    height: 220,
    alignItems: "center",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    borderWidth: 3,
    elevation: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bannerContent: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    borderRadius: 100,
    paddingRight: 15,
    bottom: 10,
  },
  loginContainer: {
    gap: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
