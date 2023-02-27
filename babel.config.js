module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current',
				},
			},
		],
		'@babel/preset-typescript',
	],
	plugins: [
		[
			'module-resolver',
			{
				alias: {
					'@config': './sources/config',
					'@controllers': './sources/controllers',
					'@models': './sources/models',
					'@views': './sources/views',
					'@services': './sources/services',
				},
			},
		],
	],
}
