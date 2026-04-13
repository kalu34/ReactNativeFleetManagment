import { Stack } from "expo-router";
import ThemeProvider from "../Theme/ThemeProvider";
import { themeColors } from "../Theme/constant/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider value={themeColors.light}>
        <Stack>
          <Stack.Protected guard={false}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
          </Stack.Protected>
          <Stack.Protected guard={true}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack.Protected>
        </Stack>
      </ThemeProvider>
    </SafeAreaView>
  );
}
