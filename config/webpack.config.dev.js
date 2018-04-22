/*
 * @Author: qiao 
 * @Date: 2017-12-11 10:33:13 
 * @Last Modified by: qiao
 * @Last Modified time: 2018-03-22 10:14:05
 * @description:  webpack 开发环境配置
 * webpack.config.base.js ——> webpack.config.dev.js
 */

const helpers = require('./helpers'),
  webpackConfig = require('./webpack.config.base'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  DefinePlugin = require('webpack/lib/DefinePlugin'),
  env = require('../environment/dev.env');

const museUiThemePath = helpers.root('./src/assets/css/muse-custom-theme.less'); // 自定义主题
const museUiStylePath = helpers.root('./node_modules/muse-ui/src/styles'); // 路径

// const CompressionPlugin = require('compression-webpack-plugin');

/**
 * // 开发环境推荐使用 eval-source-map，它在初次build时较慢，但是在重新build时较快，同时可以提供最好的源码映射
 */
webpackConfig.devtool = 'eval-source-map';

// webpackConfig.resolve = {
//   ...webpackConfig.resolve,

// }

webpackConfig.output = {
  ...webpackConfig.output,
  /**
   * chunkhash 与 hash： hash每次编译产生chunk都会变化，而chunkhash是根据chunk内容计算出来的，只有chunk内容变了才会变化
   * 这样在更新版本后，用户如果有缓存则只会新加载内容变化后的chunk。可以最大限度的利用客户端缓存，同时保证chunk内容变化后
   * 客户端不会加载缓存。
   * 注意： 热更新与chunkhash不能同时用。通常开发环境用 热更新 + hash。生产环境用 chunkhash
   */
  filename: 'js/[name].[hash].js'
}

webpackConfig.module.rules = [...webpackConfig.module.rules,
{ // 使用vue-loader插件 + vue文件模板 可以在加载vue的时候只加载运行时vue文件。这样可以明显缩小js体积
  test: /\.vue$/,
  loader: 'vue-loader',
  
  options: {
    loaders: {
      'less': [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            globalVars: { // 在less-loader中定义一个全局变量
              museUiTheme: `'${museUiThemePath}'`,
              museUiStylePath: `'${museUiStylePath}'`,
            }
          }
        }
      ],
      // 不再推荐这种 行内定义多个loader并且使用 ! 做分隔符的写法，这种写法是非标准的。
      // 'scss': 'vue-style-loader!css-loader!sass-loader', // 设置vue文件内，scss文件需要的loader
      // 'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax', // 设置vue文件内，sass文件需要的loader
      // 'ts': 'ts-loader!tslint-loader' // 设置vue文件内，ts文件需要的loader
      'scss': [
        'vue-style-loader',
        'css-loader',
        'sass-loader'
      ],
      'sass': [
        'vue-style-loader',
        'css-loader',
        'sass-loader?indentedSyntax' // 不再推荐使用这种 query（加问号）的语法来配置loader。推荐使用 options 
      ],
      'ts': [
        'awesome-typescript-loader', // 'ts-loader', // 'awesome-typescript-loader',
        'tslint-loader'
      ]
    }
  }
},
{// css编译
  test: /\.css$/,
  use: [
    /**
     * style-loader 可以将 css 以style 标签的方式注入到 header 标签中
     */
    'style-loader',
    /**
     * css-loader 的作用在于 可以在 js 中 import css from 'file.css'，并且会解析css中的@import 与 url()
     * 并将这些解析的资源可以交给 file-loader 和 url-loader
     */
    'css-loader'
  ] // 一定要按照这个顺序，不然会报错
},
{
  /**
   * 条件有两种输入值：
   * 		resource：请求文件的绝对路径。它已经根据 resolve 规则解析。
   * 		issuer: 被请求资源(requested the resource)的模块文件的绝对路径。是导入时的位置。
   * 		例如: 从 app.js 导入 './style.css'，resource 是 /path/to/style.css. issuer 是 /path/to/app.js。
   * 		在规则中，属性 test, include, exclude 和 resource 对 resource 匹配，并且属性 issuer 对 issuer 匹配。
   * 总结：test 是对 import 资源文件的 绝对路径进行匹配的。
   */
  test: /\.less$/,
  /**
   * 使用use选项，可以设置一个useentry列表。每一个useentry 对象都是一个loader的配置。
   * 借助useentry列表，可以实现对匹配资源设置多个loader，并且可以对每个loader进行单独的配置
   */
  use: [ // 'style-loader', 'css-loader', 'less-loader'，对一种文件使用多种loader的时候，loader加载顺序是从后往前
    { loader: 'style-loader' },
    { loader: 'css-loader' },
    {
      loader: 'less-loader',
      options: { // 使用options选项可以给该loader设置一些配置
        globalVars: { // 在less-loader中定义一个全局变量
          museUiTheme: `'${museUiThemePath}'`,
          museUiStylePath: `'${museUiStylePath}'`,
        }
      }
    }
  ]
},
{
  test: /\.scss$/, // sass的loader
  use: [{
    loader: 'style-loader'
  },
  {
    loader: 'css-loader'
  },
  {
    loader: 'sass-loader'
  }
  ]
}
];

webpackConfig.plugins = [...webpackConfig.plugins,
/**
 * 该插件会重新生成一个 html5 文件，到build目录。
 */
new HtmlWebpackPlugin({
  // 将 入口bundle js 注入到生成的html中
  inject: true,
  // 指定 template
  template: helpers.root('/src/index.html'),
  favicon: helpers.root('/src/favicon.ico')
}),

/**
 * DefinePlugin 允许创建一个在编译时可以配置的全局常量。这可能会对开发模式和发布模式的构建允许不同的行为非常有用。
 * 如果在开发构建中，而不在发布构建中执行日志记录，则可以使用全局常量来决定是否记录日志
 * 这个插件的value的定义需要小心
 * 如果这个值是一个字符串，它会被当作一个代码片段来使用。
 * 如果这个值不是字符串，它会被转化为字符串(包括函数)。
 * 如果这个值是一个对象，它所有的 key 会被同样的方式定义。
 * 
 * 定义字符串的 正确姿势 VERSION: JSON.stringify("5fa3b9"),
 * 
 */
new DefinePlugin({ // 定义一个名为'process.env'的全局变量，使得业务代码可以直接使用
  'process.env': env
}),

  /**
   * 将js代码 或者 css代码 做gzip压缩，
   * 但是 HtmlWebpackPlugin 插件没有提供 注入 gzip 压缩js文件的功能，所以这个
   * 插件 无法与 HtmlWebpackPlugin 形成联动。真是伤脑筋
   */
  // new CompressionPlugin({
  //   /**
  //    * path 代表 原js 文件的路径，包括js文件名
  //    * query 代表 原js 文件后面可能存在的查询字符串
  //    */
  //   asset: '[path].gz[query]',
  //   // 对js文件以及 css文件提供压缩
  //   test: /.(js|css|gz|html)$/,
  //   /**
  //    * 使用默认的 gzip 压缩
  //    */
  //   algorithm: 'gzip'
  // }),

];

webpackConfig.devServer = { // webpack devServer 的配置定义
  // 端口
  port: 8080,
  // 默认是localhost，如果希望服务器外部可访问，可以指定 0.0.0.0
  host: '0.0.0.0',
  // 该选项打开后，不会对访问开发服务器的外部host主机进行检查，这是不推荐的
  // disableHostCheck: true,
  // 设置任意的404请求都被 重定向到 index.html 
  historyApiFallback: true,
  // 让 webpack devServer监控文件的改变，并在改变时自动编译文件，该选项在 webpack devServer中默认开启
  // watch: true,
  /**
   * webpack 使用文件系统(file system)获取文件改动的通知。在某些情况下，不会正常工作。例如，当使用 Network File System (NFS) 时,
   * 在当前工程中，应该不会有影响。
   */
  // watchOptions: {
  //   aggregateTimeout: 300,
  //   poll: 1000
  // },
  /**
   * 定义开发服务器的静态文件目录为 dist
   */
  contentBase: helpers.root('/dist'), // './dist',
  // 当开发服务器运行时，自动打开默认浏览器
  // open: true,

  // 开启模块热替换
  hot: true,
  // 在开发服务器的所有响应头中添加 header 
  headers: {
    "X-Custom-Foo": "bar"
    // "Content-Encoding": "gzip"
  },
  /**
   * 代理转发，开发服务器将变成代理，将请求转发到独立的后台api服务器中
   * 这样可以避免跨域的问题
   * 下面的示例中，开发服务器会将 发送到 /api 目录下的请求 转发到 http://192.168.1.1:3000 主机上。
   */
  proxy: {
    "/ailink/rest": "http://192.168.137.1:8080"
  }
};

/**
 * webpack的配置文件事实上是一个导出js对象的文件，所以在此导出配置对象
 */
module.exports = webpackConfig;
