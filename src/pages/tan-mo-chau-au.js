import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import pic1 from "../images/tanmo/pic1.png"
import pic2 from "../images/tanmo/pic2.png"
import pic3 from "../images/tanmo/pic3.png"
import pic4 from "../images/tanmo/pic4.png"
import pic5 from "../images/tanmo/pic5.png"
import pic6 from "../images/tanmo/pic6.png"
import pic7 from "../images/tanmo/pic7.png"
import pic8 from "../images/tanmo/pic8.png"

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
      <SEO title="Tan mỡ Châu Âu" />
      <Main>
        <h1>Tiêm Tan Mỡ Châu Âu Fusion PPC+</h1>
        <p>
          Thân hình “ngồn ngộn” mỡ thừa không chỉ ảnh hưởng đến tính thẩm mỹ mà
          còn tác động xấu đến sức khỏe của người mắc phải. Tiêm tinh chất
          Fusion PCC+ là giải pháp giảm béo thế hệ mới không chỉ giúp bạn loại
          bỏ mỡ thừa, sở hữu thân hình và gương mặt thon gọn một cách nhanh
          chóng mà còn cải thiện tình trạng sức khỏe không cần phẫu thuật, không
          cần nghỉ dưỡng.
        </p>
        <div className="img">
          <img alt="pic1" src={pic1} />
        </div>

        <h2>Tiêm tinh chất giảm béo Fusion là gì? Cơ chế hoạt động</h2>
        <p>
          Trong cơ thể con người có 2 loại mỡ là mỡ nâu và mỡ trắng. Mỡ nâu được
          xem là “mỡ tốt” chiếm 10% thể tích. Thường nằm ở cổ, vai và lưng để
          tạo thành thân nhiệt, duy trì sự ấm áp cho cơ thể.
        </p>
        <p>
          Mỡ trắng chiếm đến 90% thể tích, rất dễ tăng kích thước và có thể di
          chuyển trong cơ thể. Trong mỡ trắng có tế bào mỡ chứa nhiều Lipid có
          thể phình to rất nhanh bởi nó hấp thụ chất béo từ thức ăn đưa vào gây
          nên tình trạng béo phì.
        </p>
        <p>
          Tính đến hiện tại có rất nhiều cơ chế để giảm béo, giảm mỡ và Fusion
          PPC+ là một trong số đó. Tinh chất Fusion PPC+ sau khi được đưa vào cơ
          thể sẽ làm tăng cường chuyển hóa chất béo, đốt cháy chất béo lipid và
          đào thải mỡ thừa ra khỏi cơ thể.
        </p>
        <div className="img">
          <img alt="pic2" src={pic2} />
        </div>

        <p>
          Tiêm tinh chất giảm béo Fusion PPC+ là xu hướng giảm béo độc quyền tại
          LYN SPA được chuyển giao bởi đối tác Hàn Quốc. Tinh chất Fusion PPC+
          chính hãng đã được FDA xác thực về độ an toàn, lành tính và hiệu quả.
        </p>

        <h2>Ưu điểm khi giảm béo bằng tinh chất Fusion PPC+</h2>
        <p>
          Sau khi chính thức đưa ra thị trường, LYN SPA đã khảo sát trên 100
          khách hàng với cơ địa khác nhau. Và 100% khách hàng trải nghiệm đều
          thực sự hài lòng với ưu điểm dưới đây:
        </p>
        <div className="img">
          <img alt="pic3" src={pic3} />
        </div>

        <h4>✔ Lành tính, an toàn cho sức khỏe người sử dụng</h4>
        <p>
          Fusion PPC+ sản xuất trên dây chuyền công nghệ hiện đại, được điều chế
          từ các loại trái cây giàu vitamin C không chỉ giảm mỡ hiệu quả mà còn
          giúp làm săn chắc, hồng hào vùng điều trị.
        </p>
        <h4>✔ Hủy mỡ tức thì, cho kết quả ngay sau khi thực hiện</h4>
        <p>
          Sau khi tinh chất Fusion PPC+ được Tiêm vào vùng thực hiện trong thời
          gian 30 phút, các mô mỡ thừa lập tức được phá hủy. Khách hàng sẽ cảm
          nhận được sự râm ran tại vị trí Tiêm giảm béo.
        </p>
        <h4>✔ Giảm mỡ trúng đích, không tái béo</h4>
        <p>
          Tinh chất giảm béo Fusion PPC+ giúp tăng cường chuyển hóa chất béo,
          đốt cháy chất béo lipid và đào thải mỡ thừa ra khỏi cơ thể. Khách hàng
          muốn giảm béo chỗ nào sẽ giảm chỗ đó, tác dụng tại điểm Tiêm tinh
          chất, không di chuyển qua vùng khác.
        </p>
        <h4>✔ Giảm mỡ dưới da, mỡ nội tạng</h4>
        <p>
          Tinh chất Fusion PPC+ kết hợp với thao tác đi máy massage kỹ thuật cao
          giúp đẩy sâu tinh chất, ngăn chặn tối đa quá trình hồi cân, tích mỡ
          đồng thời “phá đảo” tận gốc mỡ thừa kể cả mỡ lâu năm lẫn mỡ nội tạng
          cứng đầu.
        </p>
        <h4>✔ Cải thiện sức khỏe</h4>
        <p>
          Sự kích thích va đập không ngừng các eletron tự do của tinh chất giảm
          béo Fusion PPC+ vào các tế bào mỡ nhằm phá tan kết cấu mỡ rắn chắc,
          hóa lỏng nhẹ nhàng, đào thải tối đa mỡ ra ngoài cơ thể thông qua đường
          tiết niệu. Từ đó, hỗ trợ giải quyết “triệt để” cả mỡ nội tạng, tác
          động tích cực trong việc điều trị chứng bệnh: cao huyết áp, máu nhiễm
          mỡ, xơ vữa động mạch, tiểu đường…
        </p>
        <h4>✔ Không phẫu thuật, không xâm lấn, không đau</h4>
        <p>
          Tinh chất Fusion PPC+ sẽ được đưa vào vùng tích mỡ bằng những mũi kim
          tiêm chuyên biệt. Đảm bảo không phẫu thuật, không xâm lấn, không đau,
          không mất thời gian nghỉ dưỡng.
        </p>
        <h4>✔ Thực hiện nhanh chóng</h4>
        <p>
          Thời gian thực hiện tiêm tinh chất giảm béo được tiến hành trong
          khoảng 20 phút. Sau khi hoàn tất, khách hàng có thể về nhà ngay mà
          không cần nghỉ dưỡng.
        </p>

        <h2>Đối tượng giảm béo bằng tinh chất Fusion PPC+</h2>
        <div className="img">
          <img alt="pic4" src={pic4} />
        </div>

        <ul>
          <li>Phù hợp cho cả nam và nữ</li>
          <li>Người có cơ địa khó giảm và mỡ lâu năm</li>
          <li>Người bụng bia, mỡ sau sinh, mỡ do dậy thì</li>
          <li>Người có mỡ vùng bụng trên và bụng dưới nhiều</li>
          <li>Người có mỡ 2 bên hông, 2 bên đùi và 2 bên cánh tay</li>
          <li>Người có mỡ nọng và mỡ ngay góc cạnh hàm</li>
          <li>Người có mỡ vùng lưng xoài</li>
          <li>Người không có nhiều thời gian để thực hiện phẫu thuật hút mỡ</li>
          <li>Người mong muốn sở hữu thân hình thon gọn, săn chắc</li>
          <li>
            Người có nhiều mỡ thừa gây nên các bệnh lý về huyết áp, mỡ trong
            máu,…
          </li>
        </ul>

        <h4>Chống chỉ định cho những trường hợp:</h4>
        <ul>
          <li>Phụ nữ có thai và đang cho con bú</li>
          <li>Người có tiền sử nhồi máu cơ tim, loạn nhịp tim</li>
          <li>Người có vết loét trên người.</li>
        </ul>

        <h2>Dòng thuốc Fusion PPC+ Châu Âu tại LYN SPA</h2>
        <p>
          Cho đến thời điểm hiện tại, LYN SPA đang áp dụng 1 loại Thuốc Tan Mỡ
        </p>
        <h4>✔ Tan Mỡ Fusion Châu Âu Cực Mạnh:</h4>
        <p>
          Đây là loại thuốc được nhập khẩu trực tiếp từ Tây Ban Nha, hiệu quả
          sau khi thực hiện 1 tuần - 2 tuần. Có thể duy trì vĩnh viễn nếu hạn
          chế tinh bột, chất béo và chất đường bột.
        </p>
        <div className="img">
          <img alt="pic5" src={pic5} />
        </div>

        <h2>Quy trình thực hiện giảm béo bằng tinh chất Fusion PPC+</h2>
        <div className="img">
          <img alt="pic6" src={pic6} />
        </div>

        <h2>Hình ảnh thực tế khách hàng sử dụng dịch vụ</h2>
        <div className="img">
          <img alt="pic7" src={pic7} />
        </div>
        <div className="img">
          <img alt="pic8" src={pic8} />
        </div>
      </Main>
    </Layout>
  )
}

export default IndexPage
