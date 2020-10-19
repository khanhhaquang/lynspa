import React from "react"
import styled from "styled-components"
import { IoIosCall, IoLogoFacebook, IoIosMap } from "react-icons/io"
import Layout from "../components/layout"
import SEO from "../components/seo"
import pic4 from "../images/pic4.png"

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
      <SEO title="Những ai có thể tiêm filler môi" />
      <Main>
        <h2>Những ai có thể thực hiện tiêm Filler môi</h2>
        <div className="img">
          <img alt="pic4" src={pic4} />
        </div>

        <ul>
          <li>✌ Người có bờ môi mỏng</li>
          <li>✌ Người có khuôn môi dáng không đẹp, không rõ đường nét</li>
          <li>✌ Người có đôi môi không cân xứng</li>
          <li>✌ Người có môi nhiều nếp nhăn</li>
          <li>✌ Người muốn sở hữu đôi môi căng mọng, quyến rũ</li>
        </ul>
      </Main>
    </Layout>
  )
}

export default IndexPage
