import dotent from 'dotenv'
import path from 'path'

dotent.config({ path: path.resolve(__dirname, './../../.env') })

const { CONNECTION_CLIENT, CONNECTION_HOST, CONNECTION_USER, CONNECTION_PASS, CONNECTION_DB } = process.env;

module.exports = {
	client: CONNECTION_CLIENT,
	connection: {
		host: CONNECTION_HOST,
		user: CONNECTION_USER,
		password: CONNECTION_PASS,
		database: CONNECTION_DB,
		filename: CONNECTION_CLIENT === 'sqlite3' ? CONNECTION_DB : ''
	},
	migrations: {
		directory: path.resolve(__dirname, 'migrations')
	},
	seeds: {
		directory: path.resolve(__dirname, 'seeds')
	}
}