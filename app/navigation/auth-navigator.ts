import { createStackNavigator } from "react-navigation"
import { SetupGoalsScreen } from "../screens/setup-goals-screen"
import { SetupFinishScreen } from "../screens/setup-finish-screen"
import { SetupIntegrationScreen } from "../screens/setup-integration-screen"
import { LoginScreen } from "../screens/login-screen"

export const AuthNavigator = createStackNavigator(
  {
    setupGoalsScreen: { screen: SetupGoalsScreen },
    setupFinishScreen: { screen: SetupFinishScreen },
    setupIntegrationScreen: { screen: SetupIntegrationScreen },
    loginScreen: { screen: LoginScreen },
  },
  {
    headerMode: "none",
    initialRouteName: "loginScreen",
  },
)
