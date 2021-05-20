const { app, BrowserWindow } = require('electron')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.resolve(__dirname, './build/.env') })
const server = require('./build/index')

let win

function createMainWindow() {
	const PORTA = process.env.SERVER_PORT

	server.default.listen(PORTA, () => {
		console.log('Servidor aberto na porta ' + PORTA)
	})
	win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
		},
	})
	win.loadURL('http://localhost:' + PORTA)
	win.show()
}

app.whenReady().then(createMainWindow)
