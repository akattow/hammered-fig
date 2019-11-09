import styled, { CreateStyled } from "@emotion/styled"

export const theme: Theme = {
  fontImport: `@import url('https://fonts.googleapis.com/css?family=Lato|Rubik:700&display=swap');`,

  colors: {
    text: `#524D5D`,
    white: `#fff`,
    primary: `#222239`,
    secondary: `#cdd161`,
    tertiary: `#e0552d`,
  },
  fonts: {
    header: `'Rubik', system-ui, sans-serif`,
    body: `'Lato', system-ui, sans-serif`,
    code: `'Fira Code', 'Menlo', monospace`,
  },
  fontWeights: {
    body: 400,
    heading: 700,
  },
  lineHeights: {
    double: 2.4,
    body: 1.7,
    heading: 1.125,
  },
  fontSize: 16,
  headingSizes: {
    h1: `4.209rem`,
    h2: `3.157rem`,
    h3: `2.369rem`,
    h4: `1.777rem`,
    h5: `1.333rem`,
  },
  space: {
    xxs: `.5rem`,
    xs: `1rem`,
    s: `1.5rem`,
    m: `2rem`,
    l: `4rem`,
    xl: `6.5rem`,
    xxl: `10.5rem`,
  },
  // 8, 16, 24, 40, 64, 104, 168
  // 1 2 3 5 8 13 21
  breakpoints: {
    xs: `0px`,
    s: `600px`,
    m: `960px`,
    l: `1280px`,
    xl: `1920px`,
  },
  headerHeight: "80px",
}

export type Theme = {
  fontImport: string

  colors: {
    text: string
    white: string
    primary: string
    secondary: string
    tertiary: string
  }
  fonts: {
    header: string
    body: string
    code: string
  }
  fontWeights: {
    body: number
    heading: number
  }
  lineHeights: {
    double: number
    body: number
    heading: number
  }
  fontSize: number
  headingSizes: {
    h1: string
    h2: string
    h3: string
    h4: string
    h5: string
  }
  space: {
    xxs: string
    xs: string
    s: string
    m: string
    l: string
    xl: string
    xxl: string
  }
  // 8, 16, 24, 40, 64, 104, 168
  // 1 2 3 5 8 13 21
  breakpoints: {
    xs: string
    s: string
    m: string
    l: string
    xl: string
  }
  headerHeight: string
}

export default styled as CreateStyled<Theme>
