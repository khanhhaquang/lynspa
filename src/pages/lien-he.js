import React from "react"
import styled from "styled-components"
import { IoIosCall, IoLogoFacebook, IoIosMap } from "react-icons/io"
import Layout from "../components/layout"
import SEO from "../components/seo"
import pic1 from "../images/pic1.png"
import pic2 from "../images/pic2.png"
import pic3 from "../images/pic3.png"
import pic4 from "../images/pic4.png"
import pic5 from "../images/pic5.png"

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
      <SEO title="Liên hệ" />
      <Main>
        <h2>Liên hệ</h2>
        <ul>
          <li>
            <IoIosCall />
            <span>0923456036</span>
          </li>
          <li>
            <IoLogoFacebook />
            <a
              href="https://www.facebook.com/LYN.Spa.TPHCM/"
              target="_blank"
              rel="noreferrer"
            >
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
