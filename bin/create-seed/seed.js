module.exports = function Seed(Nome) {
	return `import Knex from 'knex'

export async function seed(knex: Knex){
	return knex('${Nome}')
		.del() // Clear table
		.then(function(){
			// Inserindo resultados
			return knex('${Nome}')
				.insert([
					{
						campo: 'valor'
					}
				])
		})
}`
}
