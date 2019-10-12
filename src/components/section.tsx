import React from "react"
import styled, { setPadding } from "../utilities/theme"
import { css } from "@emotion/core"

const StyledSection = styled.section`
  padding-top: 3rem;
  padding-bottom: 3rem;
`

const Section: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
}) => {
  return (
    <StyledSection
      className={className}
      css={css`
        ${setPadding};
      `}
    >
      {children}
    </StyledSection>
  )
}

export default Section
