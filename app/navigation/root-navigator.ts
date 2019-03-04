import { createStackNavigator } from "react-navigation"
import { LoginScreen } from "../screens/login-screen"
import { ExampleNavigator } from "./example-navigator"

export const RootNavigator = createStackNavigator(
  {
    loginScreen: { screen: LoginScreen },
    exampleStack: { screen: ExampleNavigator },
  },
  {
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
  },
)
