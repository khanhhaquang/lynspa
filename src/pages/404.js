import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Main = styled.div`
  color: #fff;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not found" />
    <Main>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Main>
  </Layout>
)

export default NotFoundPage
