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

  a {
    color: #fff;
    display: block;
    margin-bottom: 16px;
    font-size: 20px;
  }
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Liên hệ" />
      <Main>
        <h2>Liên hệ</h2>
        <p>
          LYN Spa là địa chỉ thẩm mỹ uy tín với các bác sĩ kinh nghiệm trong
          ngành phẫu thuật thẩm mỹ , luôn hướng tới vẻ đẹp tự nhiên hoàn hảo
          dành cho khách hàng.
        </p>
        <p>
          Cam kết: Bảo hành về chất lượng thuốc trọn đời. Sử dụng thuốc có nguồn
          gốc rõ ràng, an toàn, đạt chuẩn. Bác sĩ có chuyên môn thực hiện.
        </p>
        <a href="https://www.facebook.com/lynspa.tphcm">
          LYN SPA - Chuyên Filler Botox
        </a>

        <address>
          <IoIosMap /> 17/44 Gò Dầu, P.Tân Quý, Q.Tân Phú, TP.HCM
        </address>
        <address>
          <IoIosCall /> 092 3456 036
        </address>
      </Main>
    </Layout>
  )
}

export default IndexPage
