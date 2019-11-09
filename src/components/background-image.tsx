import React, { HTMLAttributes } from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"

interface BgImgProps extends HTMLAttributes<HTMLImageElement> {
  background: any
}

export const BgWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 40vh;
  position: relative;
  * {
    margin-top: 0;
  }
`

const BgImg: React.FC<BgImgProps> = ({ title = "", background }) => (
  <Img
    style={{
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      marginTop: 0,
      zIndex: -10,
    }}
    fluid={background.childImageSharp.fluid}
    alt=""
    title={title}
  />
)

export default BgImg
