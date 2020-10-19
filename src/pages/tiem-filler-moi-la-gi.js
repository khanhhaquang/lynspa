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
      <SEO title="Tiêm Filler môi là gì?" />
      <Main>
        <p>
          Sở hữu đôi môi căng mọng, quyến rũ là ước muốn của tất cả phái đẹp.
          Tiêm Filler môi ra đời đã giúp chị em biến ước mơ thành hiện thực
        </p>
        <div className="img">
          <img alt="pic1" src={pic1} />
        </div>

        <h2>Tiêm Filler môi là gì?</h2>
        <p>
          Bờ môi căng mọng, gợi cảm là một trong những điểm trên gương mặt thu
          hút ánh nhìn người đối diện được chị em chú trọng. Tuy nhiên, có không
          ít người sinh ra với đôi môi mỏng kém duyên khiến họ không được tự tin
          khi đối mặt với người khác.
        </p>
        <p>
          Tiêm Filler môi là phương pháp tạo hình môi theo hình dáng như mong
          muốn mà không cần phẫu thuật, không đụng chạm dao kéo. Với kỹ thuật
          này, bác sĩ sẽ sử dụng một lượng chất làm đầy Filler tiêm vào vị trí
          môi giúp làm đầy và cân chỉnh tạo hình dáng môi như ý muốn của khách
          hàng.
        </p>

        <div className="img">
          <img alt="pic2" src={pic2} />
        </div>

        <p>
          Trong quá trình thực hiện, bác sĩ sẽ phân bổ liều lượng Filler từng
          vùng sao cho phù hợp, làm đầy thể tích vùng môi. Các phân tử Filler
          sau khi được tiêm vào sẽ ổn định sau 1 tuần, giúp dáng môi trở nên mềm
          mại và tự nhiên.
        </p>
      </Main>
    </Layout>
  )
}

export default IndexPage
