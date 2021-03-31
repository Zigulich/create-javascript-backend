const fs = require('fs')
const path = require('path')

const nomeModelo = process.argv.splice(2, process.argv.length - 1).join(' ')

const ModelDir = path.join(__dirname, './../../sources/model/')
const ControllerDir = path.join(__dirname, './../../sources/controller/')
const ViewDir = path.join(__dirname, './../../sources/view/')
const AppFile = path.join(__dirname, './../../sources/index.ts')

!fs.existsSync(ModelDir) && fs.mkdirSync(ModelDir)
!fs.existsSync(ControllerDir) && fs.mkdirSync(ControllerDir)
!fs.existsSync(ViewDir) && fs.mkdirSync(ViewDir)

const ModelText = require('./model')(nomeModelo)
const ControllerText = require('./controller')(nomeModelo)
const ViewText = require('./view')(nomeModelo)

fs.writeFileSync(ModelDir + nomeModelo + 'Model.ts', ModelText)
fs.writeFileSync(ControllerDir + nomeModelo + 'Controller.ts', ControllerText)
fs.writeFileSync(ViewDir + nomeModelo + 'Route.ts', ViewText)

// Criando a rota no app
const appImportFile = `/*{ROUTE_IMPORT}*/
import ${nomeModelo}Route from './view/${nomeModelo}Route'`
const appRoter = `/*{ROUTE_CONFIG}*/
		this.server.use('/${nomeModelo.toLowerCase()}', ${nomeModelo}Route)`

const currentText = fs.readFileSync(AppFile).toString().replace('/*{ROUTE_IMPORT}*/', appImportFile).replace('/*{ROUTE_CONFIG}*/', appRoter)

fs.writeFileSync(AppFile, currentText)

console.log('Arquivos de Model, Controller e View gerados!')
console.log(`A rota '/${nomeModelo.toLowerCase()}' foi configurada! O JWT não está habilitado`)
