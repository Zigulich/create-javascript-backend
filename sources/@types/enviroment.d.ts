declare global {
	namespace NodeJS {
		interface ProcessEnv {
			JWT_SECRET: string
			PORT?: string
			PWD: string
		}
	}
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
