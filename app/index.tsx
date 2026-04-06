import { StyleSheet, View } from 'react-native'
import { useTheme } from '../hooks/useTheme'

const SplashScreen = () => {
  const theme = useTheme()
  
  return <View style={[SplashScreenStyle.container, {backgroundColor: theme.background}]}>

  </View>
}

export default SplashScreen

const SplashScreenStyle = StyleSheet.create({
  container: {
    flex: 1
  }
})