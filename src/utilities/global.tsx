import React from "react"
import { Global as GlobalStyles, css } from "@emotion/core"
import { Theme } from "./theme"
import { useTheme } from "emotion-theming"

const Global = () => {
  const theme = useTheme<Theme>()

  return (
    <GlobalStyles
      styles={css`
        ${theme.fontImport}
        * {
          box-sizing: border-box;
          margin: 0;
        }
        /* More info: https://bit.ly/2PsCnzk */
        * + * {
          margin-top: ${theme.space.xs};
        }
        html,
        body {
          margin: 0;
          color: ${theme.colors.text};
          font-family: ${theme.fonts.body}, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol";
          line-height: ${theme.lineHeights.body};
          font-size: ${theme.fontSize}px;
          @media screen and (min-width: ${theme.breakpoints.m}) {
            font-size: ${theme.fontSize * 1.25}px;
          }
          text-rendering: optimizeLegibility;
          /* remove margin for the main div that Gatsby mounts into */
          > div {
            margin-top: 0;
          }
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${theme.fonts.header};
          color: ${theme.colors.primary};
          line-height: ${theme.lineHeights.heading};
          + * {
            margin-top: ${theme.space.xxs};
          }
        }
        h1 {
          font-size: ${theme.headingSizes.h1};
        }
        h2 {
          font-size: ${theme.headingSizes.h2};
        }
        h3 {
          font-size: ${theme.headingSizes.h3};
        }
        h4 {
          font-size: ${theme.headingSizes.h4};
        }
        h5 {
          font-size: ${theme.headingSizes.h5};
        }
        strong {
          color: #222;
        }
        a {
          color: ${theme.colors.text};
          text-decoration: none;
          background-image: linear-gradient(
            ${theme.colors.tertiary},
            ${theme.colors.tertiary}
          );
          background-size: 100% 0.15em;
          background-repeat: no-repeat;
          background-position: left 0 bottom 0%;
          transition: 100ms background-size linear;
          &:hover,
          &:focus {
            background-size: 100% 100%;
            color: white;
          }
        }
        li {
          margin-top: 0.25rem;
        }
        #gatsby-focus-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      `}
    />
  )
}

export default Global
