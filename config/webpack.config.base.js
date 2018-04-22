/*
 * @Author: qiao 
 * @Date: 2017-12-11 10:23:29 
 * @Last Modified by: qiao
 * @Last Modified time: 2018-04-22 13:34:08
 * @description:  webpack 基础配置，在这里添加vux-loader 的配置
 */

const helpers = require('./helpers'),
	Webpack = require('webpack');
	
// const museUiThemePath = helpers.root('./node_modules/muse-ui/src/styles/themes/variables/default.less');
const museUiThemePath = helpers.root('./src/assets/css/muse-custom-theme.less'); // 自定义主题
const museUiStylePath = helpers.root('./node_modules/muse-ui/src/styles'); // 路径

let config = { 
	entry: { 
		// 设置入口文件
		'index': helpers.root('/src/index.ts')
	},
	output: { 
		// 设置编译chunk文件的输出路径，注意
		path: helpers.root('/dist')
	},

	/**
	 * target用来告诉webpack的模块加载器应该处于什么环境
	 * 改属性默认是web，如果修改为node则会使用require来加载模块
	 */
	target: 'web',

	/**
	 * webpack借助 enhanced-resolve 这个库对模块路径进行管理和加载，所以resolve这个配置项是传递给webpack中'enhanced-resolve'的库的
	 * resolve配置模块如何 'import' 模块
	 */
	resolve: { // 设置全局变量，在所有的 .ts .js .html 文件中import vue，webpack都会自动使用这里的路径进行加载
		extensions: ['.ts', '.js', '.html', '.vue'],

		/**
		 * 创建 import 或 require 的别名，来确保模块引入变得更简单，具体可参见  
		 * http://www.css88.com/doc/webpack/configuration/resolve#resolve-modules
		 */
		alias: {
			// 确保 import 'vue' 的时候，导入的是 vue.runtime.esm.js。
			// 实验证明，完整版的 vue 与 runtime 的vue相比，并没有提供更多更详细的错误信息输出，所以可以统一引用runtime的vue
			'vue$': 'vue/dist/vue.runtime.esm.js',
			// 确保 import '~' 的时候，导入的是 ./src 根目录
			'@': helpers.root('./src'),
			// 确保 import 'muse-ui' 的时候，导入的 muse-ui/src 源码
			'muse-ui': 'muse-ui/src'
			// 其他没有设置的import 对象，会默认到node_module中查找
		}
	},

	module: {
		/**
		 * rules中配置loader。loader可以在 代码中 'import' 文件的时候对文件进行预处理。
		 * 每个rule 可以分为三部分 - 条件(condition)，结果(result)和嵌套规则(nested rule)
		 * 条件就是对文件的匹配规则，test include exclude就是条件,这三个选项一般提供 一个正则表达式或正则表达式的数组
		 * 对匹配到的资源使用何种loader就是结果 use loader options 这些loader相关的属于结果
		 */
		rules: [
			/**
			 * 由于 js的 babel 匹配规则中，exclude 了node_modules，所以在这里特地设置了 /muse-ui.src.*?js 的匹配规则
			 * 以确保其源码会被babel-loader编译
			 */
			{
				test: /muse-ui.src.*?js$/,
				/**
				 * 只有一个loader时，可直接使用loader选项配置loader，值时一个 loader-name 字符串
				 */
				loader: 'babel-loader'
			},
			/**
			 * 因为node_modules中通常导出的都是编译好的js文件，所以可以 关于 ts 的loader 可以 exclude: /node_modules/
			 */
			{
				test: /\.ts$/,
				/**
				 * 指定 loader 种类。
				 * 可设置为 "pre" | "post"
				 * 对于匹配到同一种资源文件的loaders，这些loaders的加载顺序会按照 pre, inline, normal, post 来进行。
				 * 其他loader没有指定enforce属性表示是普通 loader。
				 */
				enforce: 'pre', // 在加载ts文件时，先使用tlint-loader，再使用tslint-loader
				loader: 'tslint-loader',
				exclude: /node_modules/
			},
			{
				test: /\.ts$/,
				loader: 'awesome-typescript-loader', // 'ts-loader', // 'awesome-typescript-loader',  // 居然有个 awesome 前缀什么鬼
				// options: {
				// 	// silent: true
				// 	appendTsSuffixTo: [/\.vue$/]
				// },
				exclude: /node_modules/
			},
			/**
			 *  // 这里是匹配条件，每个选项都接收一个正则表达式或字符串
				// test 和 include 具有相同的作用，都是必须匹配选项
				// exclude 是必不匹配选项（优先于 test 和 include）
				// 最佳实践：
				// - 只在 test 和 文件名匹配 中使用正则表达式
				// - 在 include 和 exclude 中使用绝对路径数组
				// - 尽量避免 exclude，更倾向于使用 include
			 */
			{ 
				test: /\.js$/, // js 编译
				use: ['babel-loader'],
				// include: [
				// 	helpers.root('node_modules/vux')
				// 	// path.resolve(__dirname, "node_modules/vux"),
				// ],
				/**
				 * 以下文件夹中的文件排除babel-loader的加载
				 */
				exclude: /node_modules|vue\/dist|vue-hot-reload-api|vue-router\/|vue-loader/
			},
			/**
			 * import 文本文件时起作用，将其中的内容 导入为字符串
			 * 下面的设置 使得js中可以这样使用 import htmlTxt from '~/hello.html'; htmlTxt是hello.html的文本内容
			 */
			{
				test: /\.html$/,
				loader: 'raw-loader',
				exclude: ['./src/index.html']
			},
			/**
			 * file-loader 使得可以在 js 中 import 文件。并且 css-loader 在加载url配置的静态资源时，也会由file-loader来处理
			 * 例如 import img from '~/img.png';
			 * import 文件的时候，file-loader 做了两件事，1是将被import 的文件自动复制到 chunk 的输出文件夹
			 * 2是返回该文件在 chunk 输出文件夹的路径（public url）。 
			 */
			{
				test: /\.(jpg|png|gif)$/,
				include: helpers.root('./src'),
				loader: 'file-loader',
				options: {
					name: '/asset/imgs/[name][hash].[ext]'
				}
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				include: helpers.root('./src'),
				loader: 'file-loader',
				options: {
					name: '/asset/fonts/[name].[ext]'
				}
			},
			// 针对node_module内的文件
			{
				test: /\.(jpg|png|gif)$/,
				include: helpers.root('./node_modules'),
				loader: 'file-loader'
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				include: helpers.root('./node_modules'),
				loader: 'file-loader'
			}
		]
	},
	plugins: [
		/**
		 * 插件的目的在于解决loader无法实现的其他事，通常插件是一个构造函数
		 */
		
		/**
		 * 自动加载模块，而不必到处 import 或 require 
		 * 在代码中直接使用 $ 或者 JQuery 变量，webpack 会识别到并且自动 当成 import $ from 'jquery' 处理。
		 * 这样就不用每个文件重复写 import $ from 'jquery'，
		 * 但是这个插件 resolve 选项定义了 模块导入路径时 冲突怎么办？？应该是按照这个插件定义的路径来导入
		 */
		new Webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			/**
			 * 使用数组配置时，第一个元素是导出模块的文件路径，后面的元素是导出模块中的变量
			 * 如果模块中使用 default export，那么必须 指明导出 default，像以下示例。
			 */
			// Vue: ['vue/dist/vue.runtime.esm.js', 'default']
		})
	]
};

module.exports = config;
