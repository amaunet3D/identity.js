import fs from 'fs'

export const makeQueryFor = migrationId => {
  const file = fs.readdirSync(`${__dirname}/db/migrations`)
    .filter(file => file.endsWith('.cypher'))
    .find(file => file.startsWith(migrationId))

  return fs.readFileSync(`${__dirname}/db/migrations/${file}`).toString()
}
