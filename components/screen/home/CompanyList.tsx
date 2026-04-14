import { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useTheme } from "../../../hooks/useTheme";
import DownDirectionIcon from "../../../assets/icons/default-icon/DownDirectionIcon";
import CompanyIcon from "../../../assets/icons/default-icon/CompanyIcon";
import Text from "../../typography/Text";
import LocationIcon from "../../../assets/icons/default-icon/LocationIcon";

const CompanyList = () => {
  const theme = useTheme();
  const [showList, setShowList] = useState(false);
  const progress = useSharedValue(0);

  const directionArrowAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotateZ: `${interpolate(progress.value, [0, 1], [0, 180])}deg` },
      ],
    };
  });

  useEffect(() => {
    progress.value = withSpring(showList ? 1 : 0);
  }, [showList]);

  return (
    <View style={[CompanyListStyle.container, { borderColor: theme.border }]}>
      <Pressable
        onPress={() => setShowList(!showList)}
        style={[
          CompanyListStyle.companyContainer,
          { backgroundColor: theme.background },
        ]}
      >
        <View style={[CompanyListStyle.companyInfoContainer, { gap: 10 }]}>
          <CompanyIcon width={35} height={35} color={theme.primary} />
          <View>
            <Text fontSize={14}>General Militry Base</Text>
            <View style={[CompanyListStyle.companyInfoContainer]}>
              <LocationIcon
                width={15}
                height={15}
                color={theme.mutedForeground}
              />
              <Text
                fontSize={12}
                style={{
                  color: theme.mutedForeground,
                }}
              >
                {" "}
                Tore Hayloch Comando Base
              </Text>
            </View>
          </View>
        </View>
        <Animated.View style={[directionArrowAnimatedStyle]}>
          <DownDirectionIcon width={20} height={20} color={theme.foreground} />
        </Animated.View>
      </Pressable>
      {showList && (
        <Animated.View
          entering={FadeIn.withInitialValues({ opacity: 0.9 })}
          exiting={FadeOut.withInitialValues({ opacity: 0.9 }).duration(200)}
          style={[
            CompanyListStyle.companyListContainer,
            { backgroundColor: theme.background, borderColor: theme.muted },
          ]}
        ></Animated.View>
      )}
    </View>
  );
};

export default CompanyList;

const CompanyListStyle = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 5,
    position: "relative",
    borderWidth: 1,
    borderRadius: 20,
  },
  companyContainer: {
    height: 60,
    width: "100%",
    maxHeight: 70,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "red",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  companyInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  companyListContainer: {
    position: "absolute",
    zIndex: 100,
    height: 200,
    width: "100%",
    top: 75,
    left: 0,
    borderRadius: 15,
    borderWidth: 1,
  },
});
