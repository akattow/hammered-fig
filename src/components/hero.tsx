import React from "react"
import styled, { setPadding, Theme } from "./theme"
import { Link } from "gatsby"
import Logo from "./logo"
import css from "@emotion/css"
import Name from "./name"
import Footer from "./footer"
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
        <div
          css={css`
            margin: 1rem 15vw;
          `}
        >
          <Logo />
        </div>
        <Name />
      </div>
    </StyledHero>
  )
}

export default Hero
