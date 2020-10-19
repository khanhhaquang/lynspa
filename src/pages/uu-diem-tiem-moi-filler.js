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
      <SEO title="Ưu điểm tiêm môi filler" />
      <Main>
        <h2>Ưu điểm khi thực hiện tạo hình môi bằng Filler</h2>

        <div className="img">
          <img alt="pic3" src={pic3} />
        </div>

        <h4>Thực hiện nhanh chóng, hiệu quả thấy liền</h4>
        <p>
          Tạo hình môi bằng Filler là phương pháp mang lại hiệu quả nhanh chóng,
          tức thì. Chỉ sau 5-10 phút thực hiện là bạn đã có thể sở hữu đôi môi
          đẹp tự nhiên.
        </p>
        <h4>An toàn tuyệt đối</h4>
        <p>
          Filler là chất làm đầy được cấu tạo từ Axit Hyaluronic giống như một
          chất tự nhiên tồn tại trong cơ thể con người. Chính vì thế, khi được
          tiêm vào vùng môi, Filler có khả năng tương thích với cơ thể mà không
          gây tác dụng phụ hay biến chứng cho người thực hiện.
        </p>
        <h4>Không cần phẫu thuật, không đau</h4>
        <p>
          Filler được đưa vào vùng môi thông qua đầu kim nhỏ do đó không cần
          phẫu thuật, không mổ xẻ, rất ít xâm lấn. Trước khi thực hiện, khách
          hàng sẽ được ủ tê nên hoàn toàn không đau hay khó chịu gì.
        </p>

        <h4>Không sưng tấy, không nghỉ dưỡng</h4>
        <p>
          Bản chất của tiêm Filler là không gây ra vết thương, do đó sau khi
          thực hiện sẽ không có hiện tượng sưng tấy hay bầm tím vùng môi. Thủ
          thuật này thực hiện cũng vô cùng nhẹ nhàng nên khách hàng sẽ không cần
          nghỉ ngơi hay kiêng cữ khắt khe sau khi thực hiện.
        </p>

        <h4>Hiệu quả lâu dài</h4>
        <p>
          Sau khi tiêm Filler, bạn sẽ thấy vùng môi của mình có sự khác biệt rõ
          rệt và hiệu quả sẽ nhìn thấy rõ nhất sau 2-3 ngày lúc Filler đã bắt
          đầu ổn định. Với phương pháp này, chị em sẽ sở hữu đôi môi đẹp với
          hiệu quả duy trì từ 7 tháng đến 3 năm tùy vào loại Filler và cơ địa
          mỗi người.
        </p>
      </Main>
    </Layout>
  )
}

export default IndexPage
