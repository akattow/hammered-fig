import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { HTMLAttributes } from "react"

import Logo from "./logo-icon"
import { headerPadding } from "../utilities/layout"
import styled from "../utilities/theme"

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  siteTitle: string
  reverse?: boolean
}

const Header: React.FC<HeaderProps> = ({
  siteTitle = "",
  reverse = false,
  className,
}) => {
  const { dark, light } = useStaticQuery(graphql`
    query {
      dark: file(relativePath: { eq: "hammered-fig-icon.png" }) {
        sharp: childImageSharp {
          fixed(height: 60, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      light: file(relativePath: { eq: "hammered-fig-icon-light.png" }) {
        sharp: childImageSharp {
          fixed(height: 60, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  return (
    <StyledHeader className={reverse ? `${className} reverse` : `${className}`}>
      <LogoLink to="/">
        <Img
          fixed={reverse ? dark.sharp.fixed : light.sharp.fixed}
          alt="logo, a stylized fig"
        />
        <span>Hammered Fig</span>
      </LogoLink>
      <StyledNav>
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 9001;
  width: 100%;
  height: ${props => props.theme.headerHeight};
  ${props => headerPadding(props.theme)};

  > * {
    margin-top: 0;
  }

  /* handle reverse text*/
  * {
    color: ${props => props.theme.colors.white};
  }
  &.reverse * {
    color: ${props => props.theme.colors.text};
  }

  /* handle reverse background */
  background: ${props => props.theme.colors.primary};
  &.top {
    background: transparent;
  }
  transition: background 0.2s linear;
`
const LogoLink = styled(Link)`
  background: none;
  display: flex;
  align-items: center;
  font-family: ${props => props.theme.fonts.header};
  font-size: ${props => props.theme.headingSizes.h5};
  text-transform: uppercase;
  * {
    margin: 0;
    margin-right: ${props => props.theme.space.xs};
  }
  span {
    display: none;
    @media screen and (min-width: ${props => props.theme.breakpoints.s}) {
      display: inline;
    }
  }
`
const StyledNav = styled.nav`
  a {
    margin-right: ${props => props.theme.space.s};
    :last-of-type {
      margin-right: 0;
    }
    background-size: 100% 0.35em;
    &:hover,
    &:focus {
      background-size: 100% 100%;
    }
  }
`
