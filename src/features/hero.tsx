import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Logo from "../components/logo-icon"
import Name from "../components/logo-name"
import styled, { Theme } from "../utilities/theme"
import { layoutPadding } from "../utilities/layout"
import BgImg, { BgWrapper } from "../components/background-image"
import { whiteText } from "../utilities/styles"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"

const Hero: React.FC = ({ children }) => {
  const theme = useTheme<Theme>()
  const { background, logo } = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "stump.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 2200
            duotone: { highlight: "#6F6F86", shadow: "#222239" }
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo: file(relativePath: { eq: "hammered-fig-stacked-light.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <BgWrapper
      css={(theme: Theme) => ({ marginTop: `-${theme.headerHeight}` })}
    >
      <BgImg background={background} />
      <StyledHero>
        <SplashWrapper>
          {/* <Img fluid={logo.childImageSharp.fluid} alt="hammered fig" /> */}
          <h1>Hammered Fig</h1>
          <h2
            css={css`
              font-size: ${theme.headingSizes.h4};
            `}
          >
            a custom woodworing shop
          </h2>
        </SplashWrapper>
      </StyledHero>
    </BgWrapper>
  )
}

export default Hero

const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 70vh;
  text-align: center;
  h1 {
    text-transform: uppercase;
    /* magic number */
    font-size: ${props => props.theme.headingSizes.h3};
    @media screen and (min-width: ${props => props.theme.breakpoints.s}) {
      font-size: ${props => props.theme.headingSizes.h1};
    }
  }
  h2 {
    font-size: ${props => props.theme.headingSizes.h5};
    @media screen and (min-width: ${props => props.theme.breakpoints.s}) {
      font-size: ${props => props.theme.headingSizes.h2};
    }
  }
  * {
    ${whiteText}
  }
`

const SplashWrapper = styled.div`
  width: 100%;
  ${props => layoutPadding(props.theme)};
  * {
    margin: 0;
  }
`
