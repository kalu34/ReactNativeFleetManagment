import { StyleSheet, View } from "react-native";
import {
  Camera,
  ImageSource,
  MapView,
  StyleURL,
} from "@maplibre/maplibre-react-native";
import { useTheme } from "../../../hooks/useTheme";
import Text from "../../typography/Text";
import MapDefalutIcon from "../../../assets/icons/default-icon/MapDefalutIcon";

const LiveMap = () => {
  const theme = useTheme();

  return (
    <View
      style={[
        LiveMapStyle.container,
        { backgroundColor: theme.card, borderColor: theme.border },
      ]}
    >
      <View style={[LiveMapStyle.mapContent]}>
        <MapView
          zoomEnabled={false}
          rotateEnabled={false}
          style={StyleSheet.absoluteFill}
          scrollEnabled={false}
          mapStyle="https://tiles.openfreemap.org/styles/liberty"
        >
          <Camera
            zoomLevel={11}
            centerCoordinate={[38.72102404105727, 9.011495296193297]}
          />
        </MapView>
      </View>
      <View style={[LiveMapStyle.textContent]}>
        <MapDefalutIcon width={30} height={30} color={theme.primary} />
        <View>
          <Text fontSize={12} style={{ color: theme.foreground }}>
            Active Truck Real Time.
          </Text>
          <Text fontSize={10} style={{ color: theme.ring }}>
            Each Vehicle are on the truck.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LiveMap;

const LiveMapStyle = StyleSheet.create({
  container: {
    width: "100%",
    padding: 5,
    borderRadius: 20,
    borderWidth: 1,
  },
  mapContent: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    overflow: "hidden",
  },
  textContent: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
