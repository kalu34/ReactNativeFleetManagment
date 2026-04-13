import { StatusBar, StyleSheet, View } from "react-native";
import Text from "../../../components/typography/Text";
import { useTheme } from "../../../hooks/useTheme";
import UserInfoTitle from "../../../components/screen/home/UserInfoTitle";
import CompanyList from "../../../components/screen/home/CompanyList";

const HomeScreen = () => {
  const theme = useTheme();

  return (
    <View
      style={[
        HomeScreenStyle.container,
        { backgroundColor: theme.primaryForeground },
      ]}
    >
      {/* User Informaiton -> Notificaiton -> Settings*/}
      <UserInfoTitle />

      {/* Curren Selected Company */}
      <CompanyList />

      {/* Show User Data with Number and graph */}
      
    </View>
  );
};

export default HomeScreen;

const HomeScreenStyle = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 10, paddingVertical: 15, gap: 10 },
});
