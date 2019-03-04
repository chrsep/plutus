import { createStackNavigator } from "react-navigation"
import { MainScreen } from "../screens/main-screen"

export const AppNavigator = createStackNavigator(
  {
    mainScreen: MainScreen,
  },
  {
    headerMode: "none",
    initialRouteName: "mainScreen",
  },
)
