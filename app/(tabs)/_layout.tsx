import { Stack, Tabs } from "expo-router";
import TabBar from "../../components/navigation/TabBar";
import {
  HomeIcon,
  MapIcon,
  ReportIcon,
  SettingIcon,
  UserIcon,
} from "../../assets/icons/animated-Icon/TabBarIcons";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={({ descriptors, navigation, state, insets }) => (
        <TabBar
          descriptors={descriptors}
          state={state}
          navigation={navigation}
          insets={insets}
        />
      )}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarLabel: "Home",
          ...{ customIcon: HomeIcon },
        }}
      />
      <Tabs.Screen
        name="(map)/MapScreen"
        options={{ tabBarLabel: "Map", ...{ customIcon: MapIcon } }}
      />
      <Tabs.Screen
        name="(set)/SetScreen"
        options={{ tabBarLabel: "Set", ...{ customIcon: SettingIcon } }}
      />
      <Tabs.Screen
        name="(report)/ReportScreen"
        options={{ tabBarLabel: "Report", ...{ customIcon: ReportIcon } }}
      />
      <Tabs.Screen
        name="(profile)/ProfileScreen"
        options={{ tabBarLabel: "Profile", ...{ customIcon: UserIcon } }}
      />
    </Tabs>
  );
}
