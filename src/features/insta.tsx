import React from "react"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import useInstagram from "../hooks/useInstagram"
import { Theme } from "../utilities/theme"
import { useTheme } from "emotion-theming"

const Insta = () => {
  const instaPhotos = useInstagram()
  const { username } = instaPhotos[0]
  const theme = useTheme<Theme>()

  return (
    <>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          @media screen and (min-width: ${theme.smWidth}) {
            justify-content: space-between;
          }
          margin: 1rem -0.5rem;
        `}
      >
        {instaPhotos.reverse().map((photo: any) => (
          <a
            key={photo.id}
            href={`https://instagram.com/p/${photo.id}`}
            css={css`
              box-shadow: 0;
              display: block;
              position: relative;
              margin: 0.5rem;
              max-width: calc(100% - 1rem);
              width: 300px;
              @media screen and (min-width: ${theme.smWidth}) {
                max-width: calc(50% - 1rem);
              }
              @media screen and (min-width: ${theme.medWidth}) {
                max-width: calc(33% - 1rem);
              }
              transition: 200ms linear;

              :focus,
              :hover {
                box-shadow: 0 2px 14px #22222244;
                filter: brightness(80%);
                z-index: 10;
              }
            `}
          >
            <Img
              fluid={photo.fluid}
              alt={photo.caption}
              css={css`
                width: 100%;
                * {
                  margin-top: 0;
                }
              `}
            />
          </a>
        ))}
      </div>
      <a href={`https://instagram.com/${username}`}>
        See more on Instagram &rarr;
      </a>
    </>
  )
}

export default Insta
