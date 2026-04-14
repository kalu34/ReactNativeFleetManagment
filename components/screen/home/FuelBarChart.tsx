import { StyleSheet, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import Text from "../../typography/Text";
import { useTheme } from "../../../hooks/useTheme";
import FuelIcon from "../../../assets/icons/default-icon/FuelIcon";

const FuelBarChart = () => {
  const theme = useTheme();

  const data = [
    { value: 50 },
    { value: 80 },
    { value: 90 },
    { value: 70 },
    { value: 30 },
    { value: 10 },
    { value: 40 },
  ];
  return (
    <View style={[FuelBarChartStyle.container, { borderColor: theme.border }]}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <View
          style={[
            FuelBarChartStyle.iconContainer,
            { backgroundColor: theme.primary },
          ]}
        >
          <FuelIcon width={25} height={25} color={theme.card} />
        </View>
        <View>
          <Text fontSize={16}>Fuel Usage</Text>
          <Text
            fontSize={12}
            style={{ color: theme.mutedForeground, lineHeight: 12 }}
          >
            Detail Fuel Consemption Data.
          </Text>
        </View>
      </View>
      <BarChart
        yAxisTextStyle={{ color: theme.ring, fontSize: 10 }}
        width={300}
        data={data}
        xAxisThickness={0}
        yAxisThickness={0}
        noOfSections={4}
        barBorderRadius={10}
        showGradient
        isAnimated
        frontColor={theme.primary}
        gradientColor={theme.secondary}
        dashGap={15}
        barWidth={25}
        spacing={15}
      />
    </View>
  );
};

export default FuelBarChart;

const FuelBarChartStyle = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 20,
    gap: 20,
  },
  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },
});
