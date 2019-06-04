import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#1ED760' },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/style.scss'
  ],
  
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // '~/plugins/axios'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa'
  ],

  // server: {
  //   port: 8080, // default: 3000
  //   host: '127.0.0.1' // default: localhost
  // },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // baseURL: '',
    // credentials: false
    // proxy: true,
    proxyHeaders: false,
    credentials: false
  },

  // proxy: {
  //   '/api/': { target: 'https://api.airvisual.com', pathRewrite: {'^/api/': ''} }
  // },

  generate: {
    routes: [
      '/todo',
      '/user/aum',
      '/',
      '/seeme'
    ]
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options : {
            fix : true
          }
        })
      }
    }
  }
}
