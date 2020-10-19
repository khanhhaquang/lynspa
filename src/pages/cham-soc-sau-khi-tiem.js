import React from "react"
import styled from "styled-components"
import { IoIosCall, IoLogoFacebook, IoIosMap } from "react-icons/io"
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
      <SEO title="Liên hệ" />
      <Main>
        <h2>Chăm sóc sau khi tiêm Filler</h2>
        <p>
          Để đạt được hiệu quả như ý cũng như duy trì tối đa thời gian hiệu quả
          mà tiêm Filler mang lại, sau khi thực hiện bạn cần:
        </p>
        <ul>
          <li>☞ Không ở trong phòng có nhiệt độ cao như phòng xông hơi.</li>
          <li>
            ☞ Vì mới thực hiện Filler chưa cố định, do đó không massage vùng môi
            vì có thể khiến chất làm đầy di chuyển gây lệch dáng môi, không đều.
          </li>
          <li>
            ☞ Sau khi tiêm Filler, trên môi sẽ có những lỗ nhỏ, bạn tuyệt đối
            không trang điểm vùng môi tối thiểu là 2 ngày.
          </li>
          <li>
            ☞ Có chế độ ăn uống hợp lý, không ăn thức ăn mà trước nay bản thân
            dị ứng.
          </li>
        </ul>{" "}
      </Main>
    </Layout>
  )
}

export default IndexPage
