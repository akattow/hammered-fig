import styled, { CreateStyled } from "@emotion/styled"
import css from "@emotion/css"

export type Theme = {
  fontImport: string
  header: string
  body: string
  code: string
  textDark: string
  textLight: string

  primary: string
  secondary: string
  tertiary: string

  smWidth: string
  medWidth: string
  lgWidth: string
  basePadding: string
  smPadding: string
  medPadding: string
  lgPadding: string
}

export const theme: Theme = {
  fontImport:
    "@import url('https://fonts.googleapis.com/css?family=Quattrocento+Sans:400,700&display=swap');",
  header:
    "'Quattrocento Sans', 'Lucida Sans Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'Geneva', 'Arial', sans-serif",
  body:
    "'Quattrocento Sans', 'Lucida Sans Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'Geneva', 'Arial', sans-serif",
  code: "'Fira Code', 'Inconsolata', 'Consolas', monospace",
  textDark: "#524D5D",
  textLight: "white",

  primary: "#222239",
  secondary: "#cdd161",
  tertiary: "#e0552d",

  smWidth: "600px",
  medWidth: "960px",
  lgWidth: "1280px",
  basePadding: "2rem",
  smPadding: "5rem",
  medPadding: "8rem",
  lgPadding: "10rem",
}

export const setPadding = css`
  padding-right: ${theme.basePadding};
  padding-left: ${theme.basePadding};
  @media screen and (min-width: ${theme.smWidth}) {
    padding-right: ${theme.smPadding};
    padding-left: ${theme.smPadding};
  }
  @media screen and (min-width: ${theme.medWidth}) {
    padding-right: ${theme.medPadding};
    padding-left: ${theme.medPadding};
  }
  @media screen and (min-width: ${theme.lgWidth}) {
    padding-right: ${theme.lgPadding};
    padding-left: ${theme.lgPadding};
  }
`
export default styled as CreateStyled<Theme>
