import knex from 'knex'

const { CONNECTION_CLIENT, CONNECTION_HOST, CONNECTION_USER, CONNECTION_PASS, CONNECTION_DB } = process.env

export default knex({
	client: CONNECTION_CLIENT,
	connection: {
		host: CONNECTION_HOST,
		user: CONNECTION_USER,
		password: CONNECTION_PASS,
		database: CONNECTION_DB,
	},
})
