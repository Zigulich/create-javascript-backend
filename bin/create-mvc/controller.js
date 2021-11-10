module.exports = function controller(Nome) {
	return `import { Request, Response } from 'express'
import Connection from '@connection/connection'
import Model from '@model/${Nome}Model'

class Controller {
	async index( req: Request, res: Response ){}

	async show( req: Request, res: Response ){}

	async store( req: Request, res: Response ){}

	async update( req: Request, res: Response ){}

	async delete( req: Request, res: Response ){}
}

export default new Controller;`
}
