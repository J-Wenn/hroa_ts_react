const path = require('path')
const CracoLess = require('craco-less')

module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	plugins: [{ plugin: CracoLess }],
	devServer: {
		proxy: {
			'/': {
				target: 'https://ihrm.itheima.net/prod-api',
				changeOrigin: true,
			},
		},
	},
}
