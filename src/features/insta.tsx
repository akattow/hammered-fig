import React, { useContext } from "react"
import Img from "gatsby-image"
import useInstagram from "../hooks/useInstagram"
import styled from "../utilities/theme"

const Insta = () => {
  const instaPhotos = useInstagram()
  const { username } = instaPhotos[0]

  return (
    <>
      <InstaWrapper>
        {instaPhotos.reverse().map((photo: any) => (
          <InstaLink
            key={photo.id}
            href={`https://instagram.com/p/${photo.id}`}
          >
            <Img
              fluid={photo.fluid}
              alt={photo.caption}
              style={{
                "width": `100%`,
                "*": {
                  marginTop: 0,
                },
              }}
            />
          </InstaLink>
        ))}
      </InstaWrapper>
      <a href={`https://instagram.com/${username}`}>
        See more on Instagram &rarr;
      </a>
    </>
  )
}

export default Insta

const InstaWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (min-width: ${props => props.theme.breakpoints.s}) {
    justify-content: space-between;
  }
  margin: 1rem -0.5rem;
`

const InstaLink = styled.a`
  box-shadow: 0;
  display: block;
  position: relative;
  margin: 0.5rem;
  max-width: calc(100% - 1rem);
  width: 300px;
  @media screen and (min-width: ${props => props.theme.breakpoints.s}) {
    max-width: calc(50% - 1rem);
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.s}) {
    max-width: calc(33% - 1rem);
  }
  transition: 200ms linear;
  * {
    margin-top: 0;
  }

  :focus,
  :hover {
    box-shadow: 0 2px 14px #22222244;
    filter: brightness(80%);
    z-index: 10;
  }
`
