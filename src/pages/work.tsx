import React from "react"
import { Link } from "gatsby"
import Layout from "../utilities/layout"
import SEO from "../utilities/seo"
import Section from "../components/section"
import Insta from "../features/insta"

const Work = () => (
  <Layout>
    <SEO pageTitle="Work" />
    <Section>
      <h1>Our Work</h1>
      <Insta />
    </Section>
  </Layout>
)

export default Work
