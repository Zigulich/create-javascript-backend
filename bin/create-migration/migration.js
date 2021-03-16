module.exports = function Migration(Nome) {
	return `import Knex from 'knex'

export async function up(knex: Knex){
	return knex.schema.createTable('${Nome}', table => {
		table.increments('id').primary().comment("Chave primária");
		table.timestamps(true, true);

		
		// Table comment
		table.comment("tabela teste")
	})
}

export async function down(knex: Knex){
	return knex.schema.dropTable('${Nome}')
}`
}
