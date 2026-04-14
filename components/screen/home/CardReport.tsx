import { LinearGradient } from "expo-linear-gradient";
import { FlatList, StyleSheet, View } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import Text from "../../typography/Text";
import CarIcon from "../../../assets/icons/default-icon/CarIcon";
import React from "react";

interface CardReportProps {
  title: string;
  subTitle: string;
  data: string;
  dataDefinition: string;
  backgroundColor: string;
  icon: React.ComponentType<{
    width: number;
    height: number;
    color: string;
  }>;
}

const CardReport = ({
  title,
  subTitle,
  data,
  dataDefinition,
  backgroundColor,
  icon: Icon,
}: CardReportProps) => {
  const theme = useTheme();
  return (
    <LinearGradient
      start={[0, 0]}
      end={[1, 1]}
      colors={[theme.muted, theme.background]}
      style={[
        CardReportStyle.container,
        { borderColor: theme.border },
        CardReportStyle.flexRowBetween,
      ]}
    >
      <View style={[CardReportStyle.flexRow, { gap: 10 }]}>
        <Icon width={30} height={30} color={backgroundColor} />
        <View>
          <Text fontSize={12} style={{ lineHeight: 12 }}>
            {title}
          </Text>
          <Text fontSize={10} style={{ color: theme.ring }}>
            {subTitle}
          </Text>
        </View>
      </View>
      <View>
        <Text
          fontSize={24}
          style={{
            fontFamily: "Helvetica-Bold",
            lineHeight: 24,
            color: backgroundColor,
          }}
        >
          {data}
        </Text>
        <Text fontSize={11} style={{ color: theme.mutedForeground }}>
          {dataDefinition}
        </Text>
      </View>
    </LinearGradient>
  );
};

export default CardReport;

const CardReportStyle = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  flexRowBetween: {
    justifyContent: "space-between",
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 100,
  },

  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  container: {
    flex: 1,
    height: "100%",
    borderRadius: 30,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
