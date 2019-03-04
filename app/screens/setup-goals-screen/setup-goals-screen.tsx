import * as React from "react"
import { ViewStyle } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { color } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import { styled } from "../../utils/styled-components"
import { FunctionComponent } from "react"

export interface SetupGoalsScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

// @inject("mobxstuff")
export const SetupGoalsScreen: FunctionComponent<SetupGoalsScreenProps> = props => {
  const buttonCallback = () => {
    props.navigation.navigate("setupFinishScreen")
  }
  return (
    <Screen style={ROOT} preset="fixedCenter">
      <Text preset="header" tx="setupGoalsScreen.header" />
      <NextButton onPress={buttonCallback} title="Next" />
    </Screen>
  )
}

const NextButton = styled.Button`
  font-size: 21px;
`
