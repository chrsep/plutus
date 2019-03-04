import * as React from "react"
import { ViewStyle } from "react-native"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { color } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import { FunctionComponent } from "react"
import { styled } from "../../utils/styled-components"
import { load } from "../../utils/storage"
const Logo = require("./Logo.png")

export interface AuthLoadingScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

// @inject("mobxstuff")
export const AuthLoadingScreen: FunctionComponent<AuthLoadingScreenProps> = props => {
  load("isLoggedIn").then(value => {
    if(value === 1) {
      props.navigation.navigate("app")
    } else {
      props.navigation.navigate("auth")
    }
  })
  return (
    <Container style={ROOT} preset="fixedCenter">
      <Image source={Logo} width={100}/>
      <Text preset="header" tx="authLoadingScreen.header" />
    </Container>
  )
}
const Container = styled(Screen)`
  flex: 1;
`
const Image = styled.Image`
  resize-mode: contain;
  width: 80px;
`
