import { Stack } from "expo-router";
import ThemeProvider from "../Theme/ThemeProvider";
import { themeColors } from "../Theme/constant/theme";

export default function RootLayout() {
  return (
    <ThemeProvider value={themeColors.light}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
