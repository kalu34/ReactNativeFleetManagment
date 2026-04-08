import { Stack } from "expo-router";
import ThemeProvider from "../Theme/ThemeProvider";
import { themeColors } from "../Theme/constant/theme";

export default function RootLayout() {
  return (
    <ThemeProvider value={themeColors.light}>
      <Stack>
        <Stack.Protected guard={true}>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Protected guard={false}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack.Protected>
      </Stack>
    </ThemeProvider>
  );
}
