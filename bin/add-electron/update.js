const package = require('./../../package.json')
const fs = require('fs')
const path = require('path')

// Adicionando os scripts no novo package
package.build = {
	asar: true,
	files: ['./build/**/*', './index.js'],
}
package.scripts = {
	...package.scripts,
	electron: 'electron .',
	'electron:build': 'electron-builder --dir',
}

// Deletando a opção de adicionar, já que o mesmo já foi adicionado
delete package.scripts['add-electron']

// Escrevendo novo package
fs.writeFileSync(path.resolve('./../../', 'package.json'), JSON.stringify(package, null, '\t'))
