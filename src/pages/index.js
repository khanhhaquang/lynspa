import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(80, 43, 43, 1) 100%
  );
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Trang chủ" />
      <Background></Background>
    </Layout>
  )
}

export default IndexPage
