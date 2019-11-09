import React from "react"
import styled from "../utilities/theme"
import { layoutPadding } from "../utilities/layout"

const StyledSection = styled.section`
  ${props => layoutPadding(props.theme)};
`

const Section: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
}) => {
  return <StyledSection className={className}>{children}</StyledSection>
}

export default Section
