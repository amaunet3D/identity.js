import { identity } from 'src'

const perform = migration => executedMigration => {
  if (!identity.core.lodash.isEmpty(executedMigration)) return Promise.resolve()

  return migration.execute()
    .then(migration.id)
    .then(identity.migrateDb.repositories.migration.insert)
}

export const executeMigration = migration => () => Promise.resolve(migration.id())
  .then(identity.migrateDb.repositories.migration.get)
  .then(perform(migration))
