import { ScrollView, StyleSheet, View } from "react-native";
import Text from "../../../components/typography/Text";
import { useTheme } from "../../../hooks/useTheme";
import UserInfoTitle from "../../../components/screen/home/UserInfoTitle";
import CompanyList from "../../../components/screen/home/CompanyList";
import Banner from "../../../components/screen/home/Banner";
import ReportBanner from "../../../components/screen/home/ReportBanner";
import FuelBarChart from "../../../components/screen/home/FuelBarChart";
import LiveMap from "../../../components/screen/home/LiveMap";

const HomeScreen = () => {
  const theme = useTheme();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 15, paddingBottom: 120 }}
      style={[HomeScreenStyle.container, { backgroundColor: theme.background }]}
    >
      {/* User Informaiton -> Notificaiton -> Settings*/}
      <UserInfoTitle />

      {/* Curren Selected Company */}
      <CompanyList />

      {/* Show User Data with Number and graph */}
      <Banner />

      {/* Card Detail */}
      <ReportBanner />

      {/* Fule Usege Bar Chart */}
      <FuelBarChart />

      {/* Map Sample */}
      <LiveMap />
    </ScrollView>
  );
};

export default HomeScreen;

const HomeScreenStyle = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 10, paddingVertical: 15, gap: 15 },
});
