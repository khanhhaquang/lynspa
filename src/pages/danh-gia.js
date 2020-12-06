import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import pic1 from "../images/danhgia/pic1.png"
import pic2 from "../images/danhgia/pic2.png"
import pic3 from "../images/danhgia/pic3.png"
import pic4 from "../images/danhgia/pic4.png"
import pic5 from "../images/danhgia/pic5.png"
import pic6 from "../images/danhgia/pic6.png"
import pic7 from "../images/danhgia/pic7.png"

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
      <SEO title="Đánh giá từ khách hàng thân yêu" />
      <Main>
        <h2>Đánh giá từ khách hàng thân yêu</h2>
        <div className="img">
          <img alt="pic1" src={pic1} />
        </div>
        <div className="img">
          <img alt="pic2" src={pic2} />
        </div>
        <div className="img">
          <img alt="pic3" src={pic3} />
        </div>
        <div className="img">
          <img alt="pic4" src={pic4} />
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
        <p>
          Cảm ơn các bạn rất nhiều vì đã giúp LYN SPA trở thành thương hiệu số
          một trong lòng khách hàng. Không có thành tựu nào của chúng tôi có thể
          đạt được nếu không có các bạn và sự hỗ trợ vững chắc này. Chúng tôi
          đảm bảo tiếp tục đặt nhu cầu của các bạn lên hàng đầu khi Thẩm Mỹ Viện
          của chúng tôi mở rộng và cải tiến!
        </p>
      </Main>
    </Layout>
  )
}

export default IndexPage
