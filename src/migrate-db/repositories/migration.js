import { identity } from 'src'

const get = migrationId => {
  const query = identity.migrateDb.makeQueryFor('0000000000000-get-migration.cypher')
  const parameter = { parameter: { id: migrationId } }

  return identity.core.dbStorage.executeQuery(query, parameter)
}

const insert = migrationId => {
  const query = identity.migrateDb.makeQueryFor('0000000000000-store-migration.cypher')
  const parameter = { entity: { id: migrationId } }

  return identity.core.dbStorage.executeQuery(query, parameter)
}

export const migration = {
  get,
  insert
}
