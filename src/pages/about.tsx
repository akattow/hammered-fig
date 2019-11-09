import React from "react"

import Layout from "../utilities/layout"
import SEO from "../utilities/seo"
import { Link } from "gatsby"
import Section from "../components/section"

const About = () => (
  <Layout reverse>
    <SEO pageTitle="Home" />
    <Section>
      <h1>About Us</h1>
      <p>
        Hammered Fig is a traditional woodworking shop creating hand-crafted and
        custom pieces in Milwaukee, Wisconsin. We focus on hand-crafted work and
        sustainable rescue, working with fallen and reclaimed wood from the
        greater Milwaukee area.
      </p>
      <p>We proudly support local artisans, workers, and materials.</p>
    </Section>
  </Layout>
)

export default About
