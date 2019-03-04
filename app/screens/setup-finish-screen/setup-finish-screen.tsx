import * as React from "react"
import { ViewStyle } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { color } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import { styled } from "../../utils/styled-components"
import { FunctionComponent } from "react"
import { save } from "../../utils/storage"

export interface SetupFinishScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

// @inject("mobxstuff")
export const SetupFinishScreen: FunctionComponent<SetupFinishScreenProps> = props => {
  const buttonCallback = () => {
    save("isLoggedIn", 1).then(() => {
      props.navigation.navigate("mainScreen")
    })
  }
  return (
    <Screen style={ROOT} preset="fixedCenter">
      <Text preset="header" tx="setupFinishScreen.header" />
      <NextButton onPress={buttonCallback} title="Next" />
    </Screen>
  )
}

const NextButton = styled.Button`
  font-size: 21px;
`
