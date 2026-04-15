import { StyleSheet, View, TextInput, TextInputProps } from "react-native";
import Text from "../typography/Text";
import { useTheme } from "@/hooks/useTheme";

interface BaseTextInputProps extends TextInputProps {
  label: string,
  showPassword: boolean,
  placeHolder: string,
  errorMessage: string | undefined;
  error: boolean;
  value: string;
  onChangeText: () => void;
}
const BaseTextInput = ({
  label,
  placeHolder,
  error,
  errorMessage,
  value,
  showPassword,
  onChangeText,
}: BaseTextInputProps) => {
  const theme = useTheme();

  return (
    <View style={[BaseTextInputStyle.container]}>
      <Text fontSize={12} style={{ fontFamily: "Helvetica-Bold" }}>
        {label}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={theme.mutedForeground}
        placeholder={placeHolder}
        secureTextEntry={showPassword}
        style={[
          BaseTextInputStyle.inputContainer,
          { borderColor: error ? theme.chart1 : theme.border },
        ]}
      />
      {error && errorMessage && (
        <Text fontSize={11} style={{ color: theme.chart1, marginLeft: 10 }}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
};

export default BaseTextInput;

const BaseTextInputStyle = StyleSheet.create({
  container: {
    width: "100%",
    gap: 8,
  },
  inputContainer: {
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 40,
    fontSize: 12,
  },
});
