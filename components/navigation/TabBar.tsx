import type {
  BottomTabBarProps,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import Animated from "react-native-reanimated";
import Text from "../typography/Text";
import TabBarIcon from "./TabBarIcon";

// 1. Extend the standard options to include customIcon
interface CustomOptions extends BottomTabNavigationOptions {
  customIcon?: string;
}

// 2. Extract the base descriptor and replace its options with our CustomOptions
type BaseDescriptor = BottomTabBarProps["descriptors"][string];
type CustomDescriptor = Omit<BaseDescriptor, "options"> & {
  options: CustomOptions;
};

// 3. Create the final Props interface for the TabBar component
interface TabBarProps extends Omit<BottomTabBarProps, "descriptors"> {
  descriptors: Record<string, CustomDescriptor>;
}

const TabBar = ({ state, navigation, descriptors, insets }: TabBarProps) => {
  const theme = useTheme();
  
  console.log(Object.entries(descriptors));

  return (
    <View style={[TabBarStyle.container]}>
      <View
        style={[TabBarStyle.tabBarContainer, { backgroundColor: theme.card }]}
      >
        <Animated.FlatList
          horizontal
          contentContainerStyle={[TabBarStyle.flatListContainerStyle]}
          data={Object.entries(descriptors)}
          renderItem={({ item, index }) => (
            <TabBarIcon
              customIcon={item[1]?.options?.customIcon ?? ""}
              isFocused={state.index === index}
              descriptors={descriptors}
              insets={insets}
              routeName={item[1]?.route?.name}
              navigation={navigation}
              state={state}
            />
          )}
        />
      </View>
    </View>
  );
};

export default TabBar;

const TabBarStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: "6%",
  },
  tabBarContainer: {
    width: "80%",
    height: "100%",
    borderRadius: 10,
  },
  flatListContainerStyle: {
    width: "100%",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
