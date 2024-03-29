import React from "react"

import SEO from "../utilities/seo"
import Layout from "../utilities/layout"

const NotFoundPage = () => (
  <Layout>
    <SEO pageTitle="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
