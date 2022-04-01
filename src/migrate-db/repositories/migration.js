import { identity } from 'src'
import getQuery from 'src/migrate-db/repositories/get-migration.cypher'
import storeQuery from 'src/migrate-db/repositories/store-migration.cypher'

const get = migrationId => identity.core
  .dbStorage
  .executeQuery(getQuery, { parameter: { id: migrationId } })

const insert = migrationId => identity.core
  .dbStorage
  .executeQuery(storeQuery, { entity: { id: migrationId } })

export const migration = {
  get,
  insert
}
