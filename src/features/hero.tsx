import React from "react"
import styled, { setPadding, Theme } from "../utilities/theme"
import Logo from "../components/logo-icon"
import css from "@emotion/css"
import Name from "../components/logo-name"
import Footer from "../components/footer"
import { useTheme } from "emotion-theming"

const StyledHero = styled.section`
  padding-top: 6rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Hero: React.FC = ({ children }) => {
  const theme = useTheme<Theme>()

  return (
    <StyledHero css={setPadding}>
      <div
        css={css`
          width: 100%;
          margin-bottom: 4rem;
          * {
            margin: 0;
          }
        `}
      >
        <Logo
          css={css`
            height: 100%;
            width: 100%;
            max-height: 50vh;
            max-width: 50vh;
            margin: 0 auto;
          `}
        />
        <Name />
      </div>
    </StyledHero>
  )
}

export default Hero
