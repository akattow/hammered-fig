import React, { HTMLAttributes } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hammered-fig.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="logo, a stylized fig"
      css={className}
    />
  )
}

export default Logo
