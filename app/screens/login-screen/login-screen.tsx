import * as React from "react"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { color, spacing } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import { styled } from "../../utils/styled-components"
import { FunctionComponent } from "react"

export interface LoginScreenProps extends NavigationScreenProps<{}> {}

// @inject("mobxstuff")
export const LoginScreen: FunctionComponent<LoginScreenProps> = props => {
  const buttonCallback = () => {
    props.navigation.navigate("setupIntegrationScreen")
  }
  return (
    <Root preset="fixedCenter">
      <LoginBg>
        <Text preset="header" tx="loginScreen.header" />
        <LoginButton title="test" onPress={buttonCallback} />
      </LoginBg>
    </Root>
  )
}

const Root = styled(Screen)`
  background-color: ${color.background};
`
const LoginBg = styled.View`
  background-color: ${color.backgroundLight};
  border-radius: 4px;
  padding: ${spacing[4]}px;
  width: 100%;
`
const LoginButton = styled.Button`
  font-size: 21px;
`
