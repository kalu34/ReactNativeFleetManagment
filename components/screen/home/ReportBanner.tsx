import { StyleSheet, View } from "react-native";
import CardReport from "./CardReport";
import GatePassIcon from "../../../assets/icons/default-icon/GatePassIcon";
import CarIcon from "../../../assets/icons/default-icon/CarIcon";
import { useTheme } from "../../../hooks/useTheme";

const ReportBanner = () => {
  const theme = useTheme();

  return (
    <View style={[ReportBannerStyle.container]}>
      <View style={{ flex: 1 }}>
        <CardReport
          backgroundColor={theme.primary}
          data="250 +"
          dataDefinition="All Action Pass."
          icon={GatePassIcon}
          subTitle="Each Terminal."
          title="Gate Pass"
        />
      </View>
      <View style={{ flex: 1 }}>
        <CardReport
          backgroundColor={theme.secondary}
          data="120 +"
          dataDefinition="Car in transition."
          icon={CarIcon}
          subTitle="Car in queue."
          title="Vehicle"
        />
      </View>
    </View>
  );
};

export default ReportBanner;

const ReportBannerStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: 130,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
});
