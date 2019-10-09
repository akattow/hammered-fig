import React from "react"
import { setPadding } from "./theme"

const Footer = () => {
  return (
    <footer css={setPadding}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}

export default Footer
