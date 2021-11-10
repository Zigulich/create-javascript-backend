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
					'@connection': './sources/connection',
					'@controller': './sources/controller',
					'@model': './sources/model',
					'@view': './sources/view',
					'@config': './sources/config',
				},
			},
		],
	],
}
