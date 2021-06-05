import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import DefaultResponse from '@functions/DefaultResponse'

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
		if (!requestToken) return DefaultResponse(false, 'Token não encontrado', {}, res)

		jwt.verify(requestToken, appSecret, function (err, decoded) {
			if (err) return DefaultResponse(false, 'Falha ao autenticar o token.', err, res)
			next()
		})
	}
}

export default new App().server
