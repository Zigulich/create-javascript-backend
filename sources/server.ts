import './dotenv.config'
import server from './index'

server.listen(process.env.PORT, () => {
	console.log(`Servidor aberto na porta ${process.env.PORT}`)
})
