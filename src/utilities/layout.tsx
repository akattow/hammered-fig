import React, { useRef } from "react"
import Header from "../components/header"
import useSiteMetadata from "../hooks/useSiteMetadata"
import Global from "./global"
import Footer from "../components/footer"
import { css } from "@emotion/core"
import { Theme, theme } from "./theme"
import { ThemeProvider } from "emotion-theming"
import { useIntersection } from "use-intersection"
import styled from "../utilities/theme"

const Layout: React.FC<{ reverse?: boolean }> = ({
  children,
  reverse = false,
}) => {
  const { title } = useSiteMetadata()
  const target = useRef<HTMLDivElement>(null)
  const intersecting = useIntersection(target, {})

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Header
        siteTitle={title}
        className={intersecting ? "top" : ""}
        reverse={reverse && intersecting}
      />
      <div
        css={css`
          width: 1px;
          height: 1px;
          position: absolute;
        `}
        ref={target}
      />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout

export const layoutPadding = (theme: Theme) => css`
  padding: ${theme.space.s};
  @media screen and (min-width: ${theme.breakpoints.m}) {
    padding: ${theme.space.m};
  }
`
export const headerPadding = (theme: Theme) => css`
  padding: ${theme.space.xxs} ${theme.space.s};
  @media screen and (min-width: ${theme.breakpoints.m}) {
    padding-top: ${theme.space.xxs} ${theme.space.m};
  }
`
const StyledMain = styled.main`
  margin-top: 0;
  padding-top: ${props => props.theme.headerHeight};
`
