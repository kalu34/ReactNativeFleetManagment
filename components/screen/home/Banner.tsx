import { StyleSheet, View } from "react-native";
import Text from "../../typography/Text";
import { LinearGradient } from "expo-linear-gradient";
import TruckIcon from "../../../assets/icons/default-icon/TruckIcon";
import { useTheme } from "../../../hooks/useTheme";

const Banner = () => {
  const theme = useTheme();
  return (
    <View style={[BannerStyle.container]}>
      <Text fontSize={14}>Arrived Travel Clam</Text>
      <LinearGradient
        locations={[0.4, 0.8,]}
        start={[0, 0]}
        end={[1, 1]}
        colors={["#E8FBCB", "#4AB855"]}
        style={[BannerStyle.bannerContainer]}
      >
        {/* Title */}
        <View style={[BannerStyle.flexRowBetween]}>
          <View style={[BannerStyle.flexRow]}>
            <TruckIcon width={40} height={40} color={theme.foreground} />
            <View>
              <Text fontSize={12}>Truck On Track</Text>
              <Text fontSize={10} style={{ fontFamily: "Helvetica-Bold" }}>
                #TXR1231FRE
              </Text>
            </View>
          </View>
          <View
            style={[
              BannerStyle.actionButton,
              { backgroundColor: theme.foreground },
            ]}
          >
            <Text fontSize={12} style={{ color: theme.card }}>
              View Detail
            </Text>
          </View>
        </View>
        {/* Progress */}
        <View
          style={[BannerStyle.passiveProgress, { backgroundColor: theme.card }]}
        >
          <View
            style={[
              BannerStyle.activeProgress,
              { backgroundColor: theme.primary },
            ]}
          ></View>
        </View>

        {/* Info Detail */}
        <View style={[BannerStyle.flexRowBetween]}>
          <View>
            <Text fontSize={10}>From</Text>
            <Text fontSize={12}>Djbuty Port</Text>
          </View>
          <View>
            <Text fontSize={10}>To</Text>
            <Text fontSize={12}>Berlin</Text>
          </View>
          <View>
            <Text fontSize={10}>Arrival Date</Text>
            <Text fontSize={12}>21 Dec 2025</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Banner;

const BannerStyle = StyleSheet.create({
  // Utils
  flexRowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  actionButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
  },

  // Main
  container: {
    gap: 10,
  },
  bannerContainer: {
    width: "100%",
    gap: 20,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  passiveProgress: {
    width: "100%",
    height: 7,
    borderRadius: 100,
    position: "relative",
  },
  activeProgress: {
    width: "50%",
    height: "100%",
    position: "absolute",
    borderRadius: 100,
    top: 0,
    left: 0,
  },
});
