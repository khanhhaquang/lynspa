module.exports = {
  siteMetadata: {
    title: `Lyn Spa`,
    description: `Hãy để Lyn Spa giúp bạn trở thành phiên bản hoàn hảo nhất của chính mình. Chinh phục cả góc nghiêng lẫn góc chính diện với tay nghề của bác sĩ thẩm mỹ có kinh nghiệm nhiều năm. Cam kết bảo hành về chất lượng Filler trọn đời. Sử dụng Filler có nguồn gốc rõ ràng, an toàn, đạt chuẩn. Bác sĩ có chuyên môn thực hiện.`,
    author: `@lynspa`,
    keywords: `Filler, Botox, Botulax, Celosome, Kairax, Làm Đẹp Không Phẩu Thuật, Fusion, Mesotheraphy, Tan Mỡ, Độc Quyền,XFC+, Căng bóng da cao cấp, Tan mỡ cao cấp, Thuốc Châu Âu, Tây Ban Nha, Đào tạo học viên`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
