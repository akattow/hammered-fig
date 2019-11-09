import React from "react"

import Layout from "../utilities/layout"
import SEO from "../utilities/seo"
import Hero from "../features/hero"
import { Link } from "gatsby"
import Section from "../components/section"

const IndexPage = () => (
  <Layout>
    <SEO pageTitle="Home" />
    <Hero />
    <Section>
      <div style={{ textAlign: "center" }}>
        <h3>Custom Crafts in Milwaukee</h3>
        <p>
          Hammered Fig is a traditional woodworking shop creating hand-crafted
          and custom pieces.
        </p>
        <p>
          Our website is under construction! In the meantime, why not{" "}
          <Link to="/work/">check out our work</Link>?
        </p>
      </div>
    </Section>
  </Layout>
)

export default IndexPage
