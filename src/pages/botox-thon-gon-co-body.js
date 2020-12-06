import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import pic1 from "../images/thongonbody/pic1.png"
import pic2 from "../images/thongonbody/pic2.png"
import pic3 from "../images/thongonbody/pic3.png"
import pic4 from "../images/thongonbody/pic4.png"
import pic5 from "../images/thongonbody/pic5.png"
import pic6 from "../images/thongonbody/pic6.png"
import pic7 from "../images/thongonbody/pic7.png"
import pic8 from "../images/thongonbody/pic8.png"
import pic9 from "../images/thongonbody/pic9.png"

const Main = styled.div`
  z-index: 1;
  color: #fff;
  margin-top: 32px;

  ul {
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
      <SEO title="Tiêm Botox thon gọn cơ body" />
      <Main>
        <h2>Tiêm Botox thon gọn cơ body</h2>

        <p>
          Với những người sở hữu các búi cơ ở vùng tay và chân to nhưng không
          muốn thực hiện phẫu thuật đau đớn thì tiêm Botox gọn cơ là sự lựa chọn
          lý tưởng nhất. Chỉ sau 5 phút thực hiện, vùng cơ tay và chân của bạn
          sẽ trở nên thon gọn và thanh thoát hơn rất nhiều mà không cần kiêng cử
          hay nghỉ dưỡng gì.
        </p>
        <div className="img">
          <img alt="pic1" src={pic1} />
        </div>
        <h2>Tiêm Botox thon gọn cơ là gì?</h2>
        <p>
          Ngành thẩm mỹ phát triển kéo theo nhiều công nghệ ra đời giúp khắc
          phục các khuyết điểm về cơ tay và cơ chân to. Tuy nhiên, có rất nhiều
          người sợ phẫu thuật hoặc không có thời gian nghỉ dưỡng nên họ đã lựa
          chọn tiêm Botox thon gọn là giải pháp thay thế an toàn.
        </p>
        <p>
          Botox là một loại dung dịch được điều chế từ độc tố của một loại khuẩn
          lợi mang tên Botulinum. Trong thẩm mỹ, Botox đã được xử lý, vô trùng,
          làm loãng và trở thành một trong những liệu pháp làm đẹp được nhiều
          người ưa chuộng.
        </p>
        <p>
          Cơ chế làm gọn cơ của Botox là tiêm vào một số cơ nhỏ vị trí trên cơ
          thể để làm tê liệt hoặc làm suy yếu hoạt động của các cơ này. Nhờ đó,
          sau khi tiêm, Botox giúp thon gọn cơ hiệu quả.
        </p>
        <p>
          Thông thường, khi nhắc đến cum từ “phẫu thuật” rất nhiều người lo sợ
          bởi nó làm chúng ta liên tưởng đến dao kéo, đau đớn và rủi ro biến
          chứng. Thế nhưng giờ đây, với liệu pháp tiêm Botox gọn cơ, sẽ không
          còn cần dao kéo, không xâm lấn, phù hợp với yêu cầu của những người
          muốn làm đẹp mà không muốn gặp biến chứng hay rắc rối. Tuy nhiên, chị
          em cần đảm bảo lượng tiêm vừa đủ theo chi dẫn của bác sĩ và tránh lạm
          dụng.
        </p>

        <h2>Ưu điểm của tiêm Botox gọn cơ</h2>
        <div className="img">
          <img alt="pic2" src={pic2} />
        </div>
        <h4>✔ Vùng cơ tay và cơ chân to sẽ được thu gọn lại</h4>
        <p>
          Ngoài khả năng xóa nếp nhăn, tiêm Botox còn có tác dụng tạo dáng cơ
          thể thanh thoát, vùng cơ dần săn chắc và thon thả tự nhiên, tạo nên
          vóc dáng hài hòa. Đặc biệt, phương pháp này còn giúp cải thiện tình
          trạng một bên cơ to và một bên cơ nhỏ khá hiệu quả.
        </p>
        <h4>✔ Không cần phẫu thuật đau đớn, không xâm lấn</h4>
        <p>
          Sau khi được tiêm vào dưới da tại vùng cơ Botox sẽ ức chế quá trình
          truyền tải “mệnh lệnh” từ thần kinh tới các cơ bắp, khiến cơ giãn ra
          và các bó cơ trở nên sắc chắc hơn. Nhờ đó đường nét trên cơ thể được
          điều chỉnh thon gọn thanh tú mà không cần trải qua cuộc phẫu thuật đau
          đớn.
        </p>
        <h4>✔ Tương thích với cơ thể, đảm bảo an toàn tuyệt đối</h4>
        <p>
          LYN SPA sử dụng loại Botox chất lượng cao nhập khẩu trực tiếp từ Hàn
          Quốc, đảm bảo không gây kích ứng, không bị phản ứng đào thải và cho
          hiệu quả nâng đỡ cơ chảy xệ nhanh chóng. Bạn sẽ sở hữu vóc dáng gọn
          gàng thanh mảnh chỉ sau 1-2 tuần thực hiện.
        </p>
        <h4>✔ Không để lại sẹo, không mất thời gian nghỉ dưỡng</h4>
        <p>
          Vì không nhờ đến sự can thiệp của “dao kéo” nên sau khi thực hiện tiêm
          Botox thon gọn bạn hoàn toàn không lo để lại sẹo. Bên cạnh đó, kỹ
          thuật đơn giản, bạn có thể về nhà ngay sau khi thực hiện và cần nghỉ
          dưỡng gì.
        </p>
        <h4>✔ Thực hiện nhanh chóng, hiệu quả kéo dài đến 1 năm</h4>
        <p>
          Tiêm botox vùng cơ thực chất chỉ là một thủ thuật đơn giản, bác sĩ sẽ
          tiêm đúng vào vị trí cần làm gọn chỉ sau 5-10 phút. Thông thường, tiêm
          Botox có tác dụng trong khoảng 6 tháng đến 1 năm tùy vào loại Botox sử
          dụng và cơ địa mỗi người.
        </p>

        <h2>Botox gọn cơ dành cho những ai?</h2>
        <ul>
          <li>Nam nữ từ 18 tuổi trở lên</li>
          <li>
            Người phì đại cơ vùng tay và chân khiến góc cơ thô, cứng và thiếu
            thon gọn
          </li>
          <li>Người có góc cơ vùng tay và chân to và thô</li>
          <li>
            Người mong muốn sở hữu vóc dáng thon gọn nhưng lại sợ dao kéo phẫu
            thuật.
          </li>
        </ul>
        <h4>Chống chỉ định với:</h4>
        <ul>
          <li>Những người có bệnh lý rối loạn thần kinh cơ.</li>
          <li>Phụ nữ đang cho con bú hoặc đang mang bầu.</li>
        </ul>

        <h2>Dòng thuốc Botox tại LYN SPA</h2>
        <p>Cho đến thời điểm hiện tại, LYN SPA đang áp dụng 1 loại Botox</p>
        <h4>✔ Botox Neuronox 200 Units:</h4>
        <p>
          Đây là loại Botox được nhập khẩu trực tiếp từ Hàn Quốc, hiệu quả sau
          khi thực hiện 1 tuần - 2 tuần. Có thể duy trì vĩnh viễn nếu hạn chế
          tập thể dục.
        </p>

        <div className="img">
          <img alt="pic3" src={pic3} />
        </div>

        <h2>Quy trình thực hiện tiêm Botox Thon Gọn Cơ</h2>
        <div className="img">
          <img alt="pic4" src={pic4} />

          <h2>Hình ảnh thực tế khách hàng sử dụng dịch vụ</h2>
        </div>
        <div className="img">
          <img alt="pic5" src={pic5} />
        </div>
        <div className="img">
          <img alt="pic6" src={pic6} />
        </div>
        <div className="img">
          <img alt="pic7" src={pic7} />
        </div>
        <h2>Đánh giá của khách hàng sau khi thực hiện</h2>
        <div className="img">
          <img alt="pic8" src={pic8} />
        </div>
        <div className="img">
          <img alt="pic9" src={pic9} />
        </div>
        <p>
          LYN Spa là địa chỉ thẩm mỹ uy tín với các bác sĩ kinh nghiệm trong
          ngành phẫu thuật thẩm mỹ , luôn hướng tới vẻ đẹp tự nhiên hoàn hảo
          dành cho khách hàng. Cam kết: Bảo hành về chất lượng thuốc trọn đời.
          Sử dụng thuốc có nguồn gốc rõ ràng, an toàn, đạt chuẩn. Bác sĩ có
          chuyên môn thực hiện.
        </p>
      </Main>
    </Layout>
  )
}

export default IndexPage
