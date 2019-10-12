import React from "react"
import Header from "../components/header"
import useSiteMetadata from "../hooks/useSiteMetadata"
import GlobalStyles from "./global-styles"
import { ThemeProvider } from "emotion-theming"
import { theme } from "./theme"
import Footer from "../components/footer"

const Layout: React.FC = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header siteTitle={title} />

      <main style={{ marginTop: 0 }}>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
