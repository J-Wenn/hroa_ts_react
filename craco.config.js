const path = require('path')
const CracoLess = require('craco-less')

module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	plugins: [{ plugin: CracoLess }],
	// devServer: {
	// 	proxy: {
	// 		'/aps': {
	// 			target: 'http://ihrm.itheima.net',
	// 			pathRewrite: { '^/aps': '/' },
	// 		},
	// 	},
	// },
}
