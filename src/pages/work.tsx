import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import Insta from "../components/insta"

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
