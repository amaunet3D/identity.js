import { repositories } from 'src/seed-db/repositories'
import { executeSeed } from 'src/seed-db/commands/execute-seed'

export const seedDb = () => {
  const migrationsImporter = require?.context('./seeds', true, /\.js$/)

  return migrationsImporter?.keys()
    .map(migrationsImporter)
    .reduce((acc, seed) => acc.then(executeSeed(seed)), Promise.resolve())
}

seedDb.repositories = repositories
