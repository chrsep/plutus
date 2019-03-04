import { createStackNavigator } from "react-navigation"
import { AuthLoadingScreen } from "../screens/auth-loading-screen"
import { AuthNavigator } from "./auth-navigator"
import { AppNavigator } from "./app-navigator"

export const RootNavigator = createStackNavigator(
  {
    authLoadingScreen: { screen: AuthLoadingScreen },
    auth: AuthNavigator,
    app: AppNavigator,
  },
  {
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
    initialRouteName: "authLoadingScreen",
  },
)
