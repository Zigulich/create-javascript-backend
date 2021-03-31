const fs = require('fs')
const path = require('path')

const MigrationNome = process.argv.splice(2, process.argv.length - 1).join(' ')
const MigrationDir = path.join(__dirname, './../../sources/connection/migrations/')

!fs.existsSync(MigrationDir) && fs.mkdirSync(MigrationDir)

const MigrationsCount = fs.readdirSync(MigrationDir).length

const MigrationModel = require('./migration')(MigrationNome)
const MigrationFilename = MigrationsCount < 10 ? '0' + MigrationsCount : MigrationsCount

fs.writeFileSync(MigrationDir + MigrationFilename + '_create_' + MigrationNome + '.ts', MigrationModel)

console.log('Migration ' + MigrationNome + ' criada com sucesso!')
