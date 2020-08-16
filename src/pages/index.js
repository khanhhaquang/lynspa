import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { IoIosCall, IoLogoFacebook, IoIosMap } from "react-icons/io"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Main = styled.div`
  z-index: 1;
  color: #fff;
  margin-top: 40px;

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
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Trang chủ" />
      <Main>
        <h1>Liên hệ</h1>
        <ul>
          <li>
            <IoIosCall />
            <span>0923456036</span>
          </li>
          <li>
            <IoLogoFacebook />
            <a href="https://www.facebook.com/LYN.Spa.TPHCM/" target="_blank">
              Facebook LynSpa
            </a>
          </li>
          <li>
            <IoIosMap />
            <span>122 Nguyễn Thái Học, P. Tân Thành, Q. Tân Phú</span>
          </li>
        </ul>
      </Main>
    </Layout>
  )
}

export default IndexPage
