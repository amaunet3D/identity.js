const fs = require('fs')
const arg = require('arg')

const args = arg({ '--name': String })

if (!args['--name']) console.error('`--name` is required') || process.exit(1)

const MIGRATION_ID = Date.now()
const MIGRATIONS_FOLDER = 'src/migrate-db/migrations'
const MIGRATION_NAME = `${MIGRATION_ID}-${args['--name']}`

const MIGRATION_CONTENT = `export const execute = () => {}

execute.id = () => '${MIGRATION_ID}'
`

fs.writeFileSync(`${MIGRATIONS_FOLDER}/${MIGRATION_NAME}.cypher`, '')
fs.writeFileSync(`${MIGRATIONS_FOLDER}/${MIGRATION_NAME}.js`, MIGRATION_CONTENT)
