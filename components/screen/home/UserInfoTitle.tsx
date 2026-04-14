import { Pressable, StyleSheet, View } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import UserIconDefault from "../../../assets/icons/default-icon/UserIcon";
import Text from "../../typography/Text";
import NotificationIcon from "../../../assets/icons/default-icon/NotificationIcon";
import DefaultSettingIcon from "../../../assets/icons/default-icon/SettingIcon";

const UserInfoTitle = () => {
  const theme = useTheme();
  return (
    <View style={[UserInfoTitleStyle?.container]}>
      <View style={[UserInfoTitleStyle.userInfoContainer]}>
        <View
          style={[
            UserInfoTitleStyle.iconContainer,
            { backgroundColor: theme.background, borderColor: theme.border },
          ]}
        >
          <UserIconDefault width={20} height={20} color={theme.primary} />
        </View>
        <View>
          <Text fontSize={13}>
            Kaleb Kassu
          </Text>
          <Text
            fontSize={11}
            style={{ color: theme.mutedForeground }}
          >
            Center Port Admin
          </Text>
        </View>
      </View>
      <View style={[UserInfoTitleStyle.utilsIconContainer]}>
        <Pressable
          style={[
            UserInfoTitleStyle.iconContainer,
            { backgroundColor: theme.card, borderColor: theme.border },
          ]}
        >
          <NotificationIcon width={20} height={20} color={theme.foreground} />
        </Pressable>
        <Pressable
          style={[
            UserInfoTitleStyle.iconContainer,
            { backgroundColor: theme.card, borderColor: theme.border },
          ]}
        >
          <DefaultSettingIcon width={20} height={20} color={theme.foreground} />
        </Pressable>
      </View>
    </View>
  );
};

export default UserInfoTitle;

const UserInfoTitleStyle = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: .5,
  },
  utilsIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
