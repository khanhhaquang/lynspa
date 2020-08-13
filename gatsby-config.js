module.exports = {
  siteMetadata: {
    title: `Lyn Spa`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
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
