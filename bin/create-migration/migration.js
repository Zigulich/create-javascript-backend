module.exports = function Migration(Nome) {
	return `import Knex from 'knex'

export async function up(knex: Knex){
	return knex.schema.createTable('${Nome}', table => {
		table.increments('id').primary().comment("Chave primária");
		table.timestamp('created_at').nullable().defaultTo(knex.fn.now()).comment('Data de criação do registro')

		
		// Comentário da tabela
		table.comment("")
	})
}

export async function down(knex: Knex){
	return knex.schema.dropTable('${Nome}')
}`
}
