import { Response } from 'express'

export default function( schema: Array<string>, data: any, res: Response ){	
	let   requiredData: Array<string> = [];
	const response: any  = { success: false, data: [], message: "" }

	for( let i = 0; i < schema.length; i++ ){
		if (!data[schema[i]]){
			requiredData.push(schema[i]) 
		}
	}

	if ( requiredData.length > 0 ){
		response.message = `Os seguintes campos não foram recebidos: ${ requiredData.join(", ") }`
		res.json(response)
		return false;
	} else {
		return true;
	}
}

// Exemplo de uso
// RequestParams(["Campo1", "Campo2"], ["Campo2", "Campo3"], Express.Response)