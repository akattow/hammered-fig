import { Link } from "gatsby"
import React from "react"
import { useTheme } from "emotion-theming"
import { Theme, setPadding } from "../utilities/theme"
import css from "@emotion/css"
import styled from "../utilities/theme"
import Logo from "./logo-icon"

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  > * {
    margin-top: 0;
  }
`

const Header: React.FC<{ siteTitle: string }> = ({ siteTitle }) => {
  const theme = useTheme<Theme>()
  return (
    <StyledHeader css={setPadding}>
      <Link
        to="/"
        css={css`
          width: 50px;
          background: none;
          * {
            margin: 0;
          }
        `}
      >
        <Logo />
      </Link>
      <div>
        <Link to="/work">Work</Link>
      </div>
    </StyledHeader>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
