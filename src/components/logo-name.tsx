import React, { HTMLAttributes } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Name: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "hammered-fig-text-alt.png" }
      ) {
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
      alt="hammered fig"
      className={className}
    />
  )
}

export default Name
