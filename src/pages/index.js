import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "../components/backgroundImage"

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;

  > div {
    min-height: 100vh;
  }
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Trang chủ" />
      <Background>
        <BackgroundImage />
      </Background>
    </Layout>
  )
}

export default IndexPage
