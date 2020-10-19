import React from "react"
import styled from "styled-components"
import { IoIosCall, IoLogoFacebook, IoIosMap } from "react-icons/io"
import Layout from "../components/layout"
import SEO from "../components/seo"
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
      <SEO title="Quy trình thực hiện" />
      <Main>
        <h2>Quy trình thực hiện</h2>
        <div className="img">
          <img alt="pic5" src={pic5} />
        </div>
        <p>
          Mặc dù chỉ là thủ thuật đơn giản, thế nhưng để đảm bảo an toàn và mang
          lại hiệu quả tối ưu thì mỗi một ca tạo hình môi bằng Filler tại LYN
          Spa sẽ được tiến hành theo quy trình sau:
        </p>

        <h4>Bước 1: Thăm khám và tư vấn</h4>
        <p>
          Khách hàng sẽ được tiến hành kiểm tra tình trạng và khuyết điểm trên
          dáng môi của khách hàng để từ đó tư vấn dáng môi và liều lượng Filler
          phù hợp.
        </p>
        <h4>Bước 2: Đo vẽ, xác định vị trí cần tiêm</h4>
        <p>
          Khách hàng sẽ được đo vẽ và xác định vị trí tiêm Filler. Lúc này,
          khách hàng có thể nói lên mong muốn của bản thân về dáng môi mà mình
          thích.
        </p>
        <h4>Bước 3: Gây tê</h4>
        <p>
          Khách hàng sẽ được tẩy trang vùng môi sau đó sát trùng để đảm bảo
          không bị nhiễm trùng trong quá trình thực hiện. Sau đó, khách hàng sẽ
          được ủ tê theo phương pháp Châu u để không có cảm giác đau, tâm trạng
          thoải mái nhất trong quá trình tiêm Filler.
        </p>
        <h4>Bước 4: Thực hiện tiêm Filler môi</h4>
        <p>
          Trong quá trình thực hiện khách sẽ được sử dụng đầu kim siêu nhỏ để
          đưa chất làm đầy Filler vào những vị trí đã xác định trước đó rồi
          chỉnh nắn dáng môi phù hợp với gương mặt của từng khách hàng.
        </p>
        <h4>Bước 5: Hướng dẫn khách hàng chăm sóc tại nhà</h4>
      </Main>
    </Layout>
  )
}

export default IndexPage
