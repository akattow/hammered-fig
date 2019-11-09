import React from "react"
import { layoutPadding } from "../utilities/layout"
import styled from "../utilities/theme"

const Footer = () => {
  return (
    <StyledFooter>
      © {new Date().getFullYear()}, Built by
      {` `}
      <a href="https://www.kattow.com">Kat Tow</a>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  ${props => layoutPadding(props.theme)};
`
