import { identity } from 'src'

const log = migration => () => console.log(`Migration ${migration.id()} was applied.`)

const perform = migration => executedMigration => {
  if (!identity.core.lodash.isEmpty(executedMigration)) return Promise.resolve()

  return migration.execute()
    .then(migration.id)
    .then(identity.migrateDb.repositories.migration.insert)
    .then(log(migration))
}

export const executeMigration = migration => () => Promise.resolve(migration.id())
  .then(identity.migrateDb.repositories.migration.get)
  .then(perform(migration))
