import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'

/*{ROUTE_IMPORT}*/

class App {
	server: express.Application

	constructor() {
		this.server = express()

		this.middlewares()
		this.routes()
	}

	routes() {
		/*{ROUTE_CONFIG}*/
	}

	middlewares() {
		this.server.use(cors())
		this.server.use(express.json())
	}

	tokenCheck(req: Request, res: Response, next: NextFunction) {
		const appSecret: string = process.env.JWT_SECRET as string
		const requestToken: string = req.headers['x-access-token'] as string
		if (!requestToken) return res.status(401).send('Token não encontrado')

		jwt.verify(requestToken, appSecret, function (err, decoded) {
			if (err) return res.status(401).send('Usuário não autorizado')
			next()
		})
	}
}

export default new App().server
