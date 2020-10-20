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
import pic6 from "../images/pic6.png"

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
      <SEO title="Trang chủ" />
      <Main>
        <h2>Vì sao nên chọn tiêm Filler môi tại LYN Spa?</h2>
        <p>
          Như trên đã nói, tiêm Filler là thủ thuật thẩm mỹ đơn giản. Thế nhưng
          trong thời gian qua đã có không ít trường hợp khách hàng gặp biến
          chứng sau khi tiêm Filler là bởi ham giá rẻ, thực hiện tại các cơ sở
          kém chất lượng sử dụng Filler không rõ nguồn gốc.
        </p>
        <p>
          Thấu hiểu được tâm lý của khách hàng khi có nhu cầu tạo hình thẩm mỹ
          môi không phẫu thuật bằng Filler, LYN Spa sử dụng 2 loại chất làm đầy
          là Filler Celosome VIP. LYN Spa cam kết Filler chính hãng mang đến cho
          khách hàng hiệu quả như ý.
        </p>

        <div className="img">
          <img alt="pic6" src={pic6} />
        </div>

        <p>
          Hãy để #LYNSPA giúp bạn trở thành phiên bản hoàn hảo nhất của chính
          mình. Chinh phục cả góc nghiêng lẫn góc chính diện với tay nghề của
          bác sĩ thẩm mỹ có kinh nghiệm nhiều năm.
        </p>
        <p>
          ☞ Cam kết: Bảo hành về chất lượng thuốc trọn đời. Sử dụng thuốc rõ
          nguồn gốc rõ ràng, an toàn, đạt chuẩn. Bác sĩ có chuyên môn thực hiện.
        </p>
        <p>⫸ Liên hệ ngay để nhận ưu đãi !</p>
        <ul>
          <li>
            <a href="tel: 0923456036">
              <IoIosCall />
              <span>0923456036</span>
            </a>
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
