import React from "react"
import "./layout.css"
import { Global, css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { Theme } from "./theme"

const GlobalStyles = () => {
  const theme = useTheme<Theme>()

  return (
    <Global
      styles={css`
        ${theme.fontImport}

        * {
          box-sizing: border-box;
          margin: 0;
        }
        /* More info: https://bit.ly/2PsCnzk */
        * + * {
          margin-top: 1rem;
        }
        html,
        body {
          margin: 0;
          color: ${theme.textLight};
          background: ${theme.primary};
          font-family: ${theme.body}, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
          line-height: 1.7;
          font-size: 16px;
          @media screen {
            font-size: 18px;
          }
          @media screen {
            font-size: 20px;
          }
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
          font-family: ${theme.header};
          color: ${theme.secondary};
          line-height: 1.1;
          + * {
            margin-top: 0.5rem;
          }
        }
        strong {
          color: #222;
        }
        a {
          color: ${theme.textLight};
          text-decoration: none;
          background-image: linear-gradient(
            ${theme.tertiary},
            ${theme.tertiary}
          );
          background-size: 100% 0.5em;
          background-repeat: no-repeat;
          background-position: left 0 bottom -50%;

          transition: 100ms background-size linear;

          &:hover {
            background-size: 100% 100%;
            color: white;
          }
        }
        li {
          margin-top: 0.25rem;
        }
      `}
    />
  )
}

export default GlobalStyles
