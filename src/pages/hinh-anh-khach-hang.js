import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import customer1 from "../images/customer1.png"
import customer2 from "../images/customer2.png"
import customer3 from "../images/customer3.png"
import customer4 from "../images/customer4.png"

const Main = styled.div`
  z-index: 1;
  color: #fff;
  margin-top: 32px;

  ul {
    list-style: none;

    li {
      margin-bottom: 16px;

      svg {
        width: 24px;
        height: 24px;
        margin-right: 16px;
        vertical-align: top;
      }

      a {
        color: #fff;
      }
    }
  }

  .img {
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Hình ảnh khách hàng" />
      <Main>
        <h2>Hình ảnh thực tế khách hàng</h2>
        <div className="img">
          <img alt="customer1" src={customer1} />
        </div>
        <div className="img">
          <img alt="customer2" src={customer2} />
        </div>
        <div className="img">
          <img alt="customer3" src={customer3} />
        </div>
        <div className="img">
          <img alt="customer4" src={customer4} />
        </div>
      </Main>
    </Layout>
  )
}

export default IndexPage
