import {
  TextStyle,
  Text as DefaultText,
  TextProps,
  StyleProp,
} from "react-native";
import { dynamicScaledFontSize } from "../../utils/font/DynamicScaledFontSize";

interface TextProp extends TextProps, TextStyle {
  fontSize: number;
  fontFamily?: string;
}
const Text = ({ fontSize, children, style, fontFamily }: TextProp) => {
  const StyleProps: StyleProp<TextStyle> = [
    {
      fontSize: dynamicScaledFontSize(fontSize),
      fontFamily: fontFamily ?? "Helvetica",
    },
    style,
  ];

  return <DefaultText style={StyleProps}>{children}</DefaultText>;
};

export default Text;
