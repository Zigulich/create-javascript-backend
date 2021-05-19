import { Response } from 'express'

export default function DefaultResponse(success: Boolean, message: string, data: any, res: Response, status: number = 200) {
	res.status(status).send({
		success,
		message,
		data,
	})
}

// Exemplo de uso:
// DefaultResponse(false, 'Ordem de Serviço não encontrada', {}, Express.Response, 400 )
