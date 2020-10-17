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

        <h2>Hình ảnh thực tế khách hàng</h2>

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
        </ul>

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
      </Main>
    </Layout>
  )
}

export default IndexPage
