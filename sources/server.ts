import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve('./', '.env') })

import server from './index'

server.listen(process.env.PORT, () => {
	console.log(`Servidor aberto na porta ${process.env.PORT}`)
})
