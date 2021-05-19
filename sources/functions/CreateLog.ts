import Connection from '@connection/connection'
import { Request } from 'express'

export default async function CreateLog(module: string, message: string, request: Request) {
	module = `Module: ${module} | Request URL: ${request.protocol}://${request.get('host') + request.originalUrl} | Request Method: ${request.method}`
	return await Connection.insert({ LOG_MODULE: module, LOG_MESSAGE: message }).into('logs')
}

// Exemplo de uso
// CreateLog('LS0001 -> show', error.message, req)
