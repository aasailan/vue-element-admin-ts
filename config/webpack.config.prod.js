/*
 * @Author: qiao 
 * @Date: 2017-12-11 10:21:26 
 * @Last Modified by: qiao
 * @Last Modified time: 2018-04-22 13:24:57
 * @description:  webpack 生产环境 配置文件
 * 配置文件引入路径： webpack.config.base.js ——> webpack.config.prod.js 
 */
const glob = require('glob'),
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CompressionPlugin = require('compression-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  PurifyCSSPlugin = require('purifycss-webpack'),
  FaviconsWebpackPlugin = require('favicons-webpack-plugin'),
  autoprefixer = require('autoprefixer'),
  webpackConfig = require('./webpack.config.base'), //引入基础配置
  helpers = require('./helpers'),
  DefinePlugin = require('webpack/lib/DefinePlugin'),
  env = require('../environment/prod.env'),
  CopyWebpackPlugin = require('copy-webpack-plugin');

const museUiThemePath = helpers.root('./src/assets/css/muse-custom-theme.less'); // 自定义主题
const museUiStylePath = helpers.root('./node_modules/muse-ui/src/styles'); // 路径

/**
 * CommonsChunkPlugin 插件，是一个可选的用于建立一个独立文件(又称作 chunk)的功能，这个文件包括多个入口 chunk 的公共模块。
 * 通过将公共模块拆出来，最终合成的文件能够在最开始的时候加载一次，便存起来到缓存中供后续使用。这个带来速度上的提升，因为浏览器会迅速将
 * 公共的代码从缓存中取出来，而不是每次访问一个新页面时，再去加载一个更大的文件。
 * new webpack.optimize.CommonsChunkPlugin(options)
 */
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

/**
 * webpack 3 以及 3 以下版本 内置了 UglifyjsWebpackPlugin 0.4.6 并且可以通过 
 * const webpack = require('webpack');
 * webpack.optimize.UglifyJsPlugin 
 * 的方式引用。下面则是直接将 UglifyJsPlugin 从webpack中导出
 */
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/**
 * 这个插件 会将所有的 入口 chunk(entry chunks)中引用的 *.css，移动到独立分离的 CSS 文件。因此，你的样式将不再内嵌到 JS bundle 中，
 * 而是会放到一个单独的 CSS 文件（即 styles.css）当中。如果你的样式文件大小较大，这会做更快提前加载，因为 CSS bundle 会跟 JS bundle 并行加载。
 */
const extractLess = new ExtractTextPlugin({
  /**
   * 生成的css文件名 [name] chunk名称 [contenthash] 根据提取的css内容生成的hash
   * 插件会对每个 entry chunk文件都生成一个css文件，当配置多个 entry chunk 的时候，必须使用 [name] 等占位符
   */
  filename: 'asset/css/[name].less.[contenthash].css',
  // 在开发环境下禁止使用该插件
  disable: process.env.NODE_ENV === 'development',
  /**
   * 设置从所有chunk中提取css代码，默认只提取 entry chunk。
   */
  allChunks: true
});

const extractCss = new ExtractTextPlugin({
  filename: 'asset/css/[name].css.[contenthash].css',
  disable: process.env.NODE_ENV === 'development',
  allChunks: true
});

const extractSass = new ExtractTextPlugin({
  filename: 'asset/css/[name].sass.[contenthash].css',
  disable: process.env.NODE_ENV === 'development',
  allChunks: true
});

const extractVueCss = new ExtractTextPlugin({
  filename: 'asset/css/[name].vue.[contenthash].css',
  disable: process.env.NODE_ENV === 'development',
  allChunks: true
});

const purifyCss = new PurifyCSSPlugin({
  paths: glob.sync(path.join(__dirname, '../src/**/*.html')),
  purifyOptions: {
    info: true,
    whitelist: []
  }
});

/**
 * 在生产环境中，直接不提供 devtool 选项，这样不会产生任务的source-map，不用考虑source-map暴露在普通用户中的问题
 * 并且在生产环境中，如果使用了 UglifyJsPlugin 插件，则需要提供 souceMap ： true 选项，否则即使提供了devtool 选项
 * 也会被直接忽视，而不产生任何的 source-map 文件
 */
webpackConfig.devtool = 'source-map';

webpackConfig.output = {
  ...webpackConfig.output,
  /**
   * 生产环境中使用 chunkhash 
   */
  filename: 'asset/js/[name].[chunkhash].js'
  /**
   * 改变bundle的引用路径，script标签的 src属性会添加上这个配置
   */
  // publicPath: '/test/'
}

webpackConfig.module.rules = [...webpackConfig.module.rules,
/**
 * vue-loader 是一个 webpack 的 loader，可以将 Vue 组件转换为 JavaScript 模块：如果仔细去查看vue-loader生成的js模块，就会发现这个生成的模块同样是用js来表示dom元素，
 * 这与jsx简直一样。
 * 每个 .vue 文件包含三种类型的顶级语言块 <template>、<script> 和 <style>
 * vue-loader 会解析文件，提取每个语言块，如有必要会通过其它 loader 处理，最后将他们组装成一个 CommonJS 模块，module.exports 出一个 Vue.js 组件对象
 */
{
  test: /\.vue$/,
  loader: 'vue-loader',
  options: {
    loaders: {
      // 使用 extractVueCss 将所有vue组件内的css都提取到一个单独的css文件
      'css': extractVueCss.extract({
        use: [
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }
        ],
        fallback: 'vue-style-loader'
      }),
      /**
       * 设置vue文件内 style lang=less的标签应该用什么loader加载，不能共用外部 test less 的配置。如果没有配置less的loader，则vue-loader会自己推断应该使用less-loader。但是
       * 不会应用到外部less-loader的配置。所有vue组件内 less 的全局变量会无法得到解析
       */
      'less': extractVueCss.extract({
        use: [
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              globalVars: { // 在less-loader中定义一个全局变量
                museUiTheme: `'${museUiThemePath}'`,
                museUiStylePath: `'${museUiStylePath}'`,
              }
            }
          }
        ],fallback: 'vue-style-loader'
        
      }),
      'scss': extractVueCss.extract({
        use: [
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ],
        fallback: 'vue-style-loader'
      }),
      'ts': [
        'awesome-typescript-loader', // 'ts-loader',
        'tslint-loader'
      ]
    }
  }
},
{// css编译
  test: /\.css$/,
  use: extractCss.extract({
    use: [
      {
        loader: 'css-loader',
        options: {
          minimize: true
        }
      }
    ],
    fallback: 'style-loader'
  })
},
{
  test: /\.scss$/,
  /**
   * extract 方法用于设置loader，以将目标资源转换为 可提取的css
   * 例如在本例中，则是配置 sass-loader 先将 sass代码转换为css
   */
  use: extractSass.extract({
    /**
     * use 配置 loader列表，以将目标资源转换为css
     */
    use: [
      {
        loader: 'css-loader',
        options: {
          // 压缩css代码
          minimize: true,
          // css 居然也有sourceMap？？暂时先不开启
          // sourceMap: true,

          /**
           * 配置css-loader作用于 @import 的资源之前 会通过多少个loader处理，在此工程中 先后经过下面两个loader处理，所以配置为2
           * 如果不设置，则按照use 列表，自动引用
           */
          importLoaders: 1
        }
      },
      /**
       * 一个用于加工css的loader。目前还不知道
       */
      // {
      //   loader: 'postcss-loader',
      //   options: {
      //     /**
      //      * 设置css处理插件列表
      //      * autoprefixer插件可以对css做一次兼容性拓展处理
      //      */
      //     plugins: () => [autoprefixer]
      //   }
      // },
      /**
       * 一个将sass转化为css的loader
       * 
       */
      {
        loader: 'sass-loader',
        options: {
          // 对sass进行sourceMap，如果开启此项，请务必在css-loader中也开启此项
          // sourceMap: true,
        }
      }
    ],
    /**
     * 如果有些chunk里面的css没有被处理（allChunk为false的情况），则使用style-loader处理
     */
    fallback: 'style-loader'
  })
},
{
  test: /\.less/,
  use: extractLess.extract({
    use: [
      {
        loader: 'css-loader',
        options: {
          minimize: true,
          importLoaders: 1
        },
      },
      {
        loader: 'less-loader',
        options: { // 使用options选项可以给该loader设置一些配置
          globalVars: { // 在less-loader中定义一个全局变量
            museUiTheme: `'${museUiThemePath}'`,
            museUiStylePath: `'${museUiStylePath}'`,
          }
        }
      }
    ],
    fallback: 'style-loader'
  })
}
];

// ensure ts lint fails the build
// webpackConfig.module.rules[0].options = {
//   failOnHint: true
// };

webpackConfig.plugins = [...webpackConfig.plugins,
  // 在loader中配置完 extract text plugin，不要忘记在插件列表进行配置
  extractCss,
  extractLess,
  extractVueCss,
  extractSass,

  /**
   * 精简css的插件，但是看介绍的时候需要考虑的问题很多，所以暂时不使用
   */
  // purifyCss,
new HtmlWebpackPlugin({
  inject: true,
  template: helpers.root('/src/index.html'),
  favicon: helpers.root('/src/favicon.ico'),
  // 一些 HtmlWebpackPlugin 插件的压缩配置 
  minify: {
    // 将 html 内的注释全部去除
    removeComments: true,
    // 去除空白字符（不清楚具体作用）
    collapseWhitespace: true,
    // ？？？
    removeRedundantAttributes: true,
    // 将模板html文件中的 doctype 替换为 html5 
    useShortDoctype: true,
    // 去除所有没有value 的html 属性
    removeEmptyAttributes: true,
    // 去除 style 和 link 标签里面的 type 属性
    removeStyleLinkTypeAttributes: true,
    // 单元素标签总是 闭合的 
    keepClosingSlash: true,
    // 将html模板中script标签内的js代码压缩（即压缩内联js代码）
    minifyJS: true,
    // 将html模板中 style 标签内css代码压缩 （压缩内联css代码） 
    minifyCSS: true,
    // 压缩URL属性？？？ 
    minifyURLs: true
  }
}),
/**
 * 压缩js代码
 */
new UglifyJsPlugin({

  // 匹配的以js结尾的文件
  test: /.js$/,

  compress: {
    // 删除 debugger 语句
    drop_debugger: true,
    // 删除console 语句
    drop_console: true,
    // 去除vuejs中的警告
    warnings: false
  },

  // include 可以通过 正则表达式来指定 匹配的文件夹路径 
  // include: /\.js$/,

  // 在使用UglifyJsPlugin插件的情况下，如果不设置这个属性，则不会进行source-map，即使设置了devtool 属性也没有用
  sourceMap: true
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
//   test: /.(js|css|html)$/,
//   /**
//    * 使用默认的 gzip 压缩
//    */
//   algorithm: 'gzip'
// }),

new DefinePlugin({ // 在webpack中定义全局变量
  'process.env': env
  // 'ailink.TEST_ENV': 
}),
/**
 * bundle可视化分析插件
 */
new BundleAnalyzerPlugin({
  /**
   * 分析模式：使用默认的server模式，分析后自动打开一个server，提供分析结果页面
   * 'static' 模式，会生成一个静态html页面来提供分析结果
   */
  // analyzerMode: 'server',
  analyzerMode: 'static',
  /**
   * server模式下，主机地址
   */
  analyzerHost: '127.0.0.1',
  /**
   * server模式下，端口地址
   */
  analyzerPort: 8888,
  /**
   * 在static模式下，定义输出的html文件名。文件会被输出到 bundle的输出文件夹下
   */
  reportFilename: 'report.html'
}),

new CommonsChunkPlugin({
  /**
   * 在3个不同的chunk 中检测到相同的模块就把这个模块抽离出来打包到common chunk
   */
  minChunks: 3,
  /**
   * 设置async 为 true，或者string(common chunk 文件的描述字符串，不是文件名)，可以使得插件深入到 每一个异步加载的
   * chunk中将相同的模块抽离出来形成一个同样是异步加载的common chunk文件。
   * 如果不设置此项，则插件只会在 entry chunk里面抽离相同代码，而不会在异步加载的chunk中抽离代码
   */
  async: 'common.chunk.[chunkhash].js',

  // minSize: 39000
  // filename: 'common.chunk.[chunkhash]js'
})
];

// 配置 webpack 只输出的统计信息
// webpackConfig.stats = 'errors-only';
// 标准输出
webpackConfig.stats = 'normal';

module.exports = webpackConfig;
