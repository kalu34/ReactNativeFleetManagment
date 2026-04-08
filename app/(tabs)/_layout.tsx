import { Stack, Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="(home)" />
      <Tabs.Screen name="(map)" />
      <Tabs.Screen name="(set)" />
      <Tabs.Screen name="(report)" />
      <Tabs.Screen name="(profile)" />
    </Tabs>
  );
}
