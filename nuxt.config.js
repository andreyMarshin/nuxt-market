const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminPlugin = require('imagemin-webpack-plugin').default
const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: 'universal',
  ...(!isDev && {
    modern: 'client'
  }),

  head: {
    htmlAttrs: {
      lang: 'ru'
    },
    title: 'Nuxt APP',
    meta: [
      { hid: 'description', name: 'description', content: 'Интернет-магазин' }
    ],
    link: [
      { rel: 'shortcut icon', href: 'favicon.ico' }
    ]
  },
  rootDir: __dirname,
  serverMiddleware: [],
  router: {
    prefetchlinks: false
  },
  loading:{ color: '#ddd' },
  css: [
    'normalize.css',
    './assets/scss/global-styles.scss'
  ],
  plugins: [],
  modules: [
    '@nuxtjs/axios',
    'nuxt-trailingslash-module',
    'nuxt-webfontloader',
    'cookie-universal-nuxt',
    '@nuxtjs/style-resources'
  ],
  webfontloader: {
    evemts: false,
    google: ['Montserrat:400,500,600:cyrillic&display=swap'],
    timeout: 5000
  },
  styleResources: {
    // your settings here
    // scss: ['./assets/scss/global-variables.scss'], // alternative: scss
    less: [],
    stylus
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  render: {
    // http2: {
    //     push: true,
    //     pushAssets: (req, res, publicPath, preloadFiles) => preloadFiles
    //     .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
    //   },
    // compressor: false,
    resourceHints: false,
    etag: false,
    static: {
      etag: false
    }
  },
  /*
  ** Build configuration
  */
  build: {
    optimazeCss: false,
    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
      css: ({ isDev }) => isDev ? '[name].css' : 'css/[contenthash].css',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
      video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'
    }
  }
}
