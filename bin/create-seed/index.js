const fs = require('fs')
const path = require('path')

const SeedNome = process.argv.splice(2, process.argv.length - 1).join(' ')
const SeedDir = path.join(__dirname, './../../sources/connection/seeds/')

!fs.existsSync(SeedDir) && fs.mkdirSync(SeedDir)

const SeedsCount = fs.readdirSync(SeedDir).length

const SeedModel = require('./seed')(SeedNome)
const SeedFilename = SeedsCount < 10 ? '0' + SeedsCount : SeedsCount

fs.writeFileSync(SeedDir + SeedFilename + '_' + SeedNome + '.ts', SeedModel)

console.log('Seed ' + SeedNome + ' criada com sucesso!')
