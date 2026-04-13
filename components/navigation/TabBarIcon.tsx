import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import {
  Canvas,
  Group,
  Path,
  Skia,
} from "@shopify/react-native-skia";
import { useEffect } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { useTheme } from "../../hooks/useTheme";
import Text from "../typography/Text";

interface TabBarIconProps extends BottomTabBarProps {
  customIcon: string;
  isFocused: boolean;
  routeName: string;
  tabName: string;
}
const TabBarIcon = ({
  customIcon,
  isFocused,
  navigation,
  tabName,
  routeName,
}: TabBarIconProps) => {
  const theme = useTheme();
  const progress = useSharedValue(3);

  // Generate svg path to animate.
  const svgPath = Skia.Path.MakeFromSVGString(customIcon) ?? "";

  // Handle On Nav Press
  const handleOnPress = () => {
    const event = navigation.emit({
      type: "tabPress",
      canPreventDefault: true,
      target: routeName,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(routeName);
    }
  };

  useEffect(() => {
    // Animate from 2 (thin outline) to 30 (filled)
    progress.value = withSpring(isFocused ? 22 : 1.5, {
      damping: 14,
      stiffness: 140,
      mass: 0.6,
    });
  }, [isFocused]);

  return (
    <Pressable onPress={handleOnPress} style={[TabBarIconStyle.contianer]}>
      <Animated.View style={[TabBarIconStyle.iconContainer]}>
        <Canvas
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Group transform={[{ scale: 1.5 }]}>
            <Group clip={svgPath}>
              <Path
                path={svgPath}
                style="stroke"
                strokeWidth={progress}
                color={isFocused ? theme.primary : theme.mutedForeground}
              />
            </Group>
          </Group>
        </Canvas>
      </Animated.View>
      <View>
        <Text
          fontSize={10}
          style={{
            color: isFocused ? theme.primary : theme.mutedForeground,
            fontFamily: "Lato-Black",
          }}
        >
          {tabName}
        </Text>
      </View>
    </Pressable>
  );
};

export default TabBarIcon;

const TabBarIconStyle = StyleSheet.create({
  contianer: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    width: 40,
    height: 40,
  },
});
