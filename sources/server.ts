import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve('./', '.env') })

import server from './index'

server.listen(process.env.SERVER_PORT, () => {
	console.log(`Servidor aberto na porta ${process.env.SERVER_PORT}`)
})
