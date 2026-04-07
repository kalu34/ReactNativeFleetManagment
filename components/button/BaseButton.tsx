import {
  StyleSheet,
  TouchableOpacity,
  View,
  TouchableOpacityProps,
} from "react-native";

interface BaseButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  backgroundColor: string,
}
const BaseButton = ({ backgroundColor,onPress, children }: BaseButtonProps) => {
  return (
    <TouchableOpacity style={[BaseButtonStyle.container, {backgroundColor: backgroundColor}]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default BaseButton;

const BaseButtonStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: 45,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
