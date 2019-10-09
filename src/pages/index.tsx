import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import css from "@emotion/css"
import { Link } from "gatsby"
import Section from "../components/section"
import { useTheme } from "emotion-theming"
import { Theme } from "../components/theme"

const IndexPage = () => (
  <Layout>
    <SEO pageTitle="Home" />
    <Hero />
    <Section>
      <div
        css={css`
          text-align: center;
        `}
      >
        <h1
          css={css`
            text-transform: lowercase;
          `}
        >
          Hammered Fig Designs
        </h1>
        <p>
          A traditional carpentry shop creating hand-crafted and custom pieces.
          <br />
          <br />
          Our website is under construction! In the meantime, why not{" "}
          <Link to="/work/">check out our work</Link>?
        </p>
      </div>
    </Section>
  </Layout>
)

export default IndexPage