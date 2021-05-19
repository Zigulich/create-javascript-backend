module.exports = function view(Nome) {
	return `import { Router } from 'express'
import Controller from '@controller/${Nome}Controller'

const Route = Router();

Route.get('/:id', Controller.index)

Route.get('/', Controller.show)

Route.post('/', Controller.store)

Route.put('/:id', Controller.update)

Route.delete('/:id', Controller.delete)

export default Route;`
}
