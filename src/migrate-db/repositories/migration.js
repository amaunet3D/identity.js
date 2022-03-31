import { identity } from 'src'

const RESOURCE_NAME = Object.freeze({
  get: '0000000000000-get-migration.cypher',
  insert: '0000000000000-store-migration.cypher'
})

const get = migrationId => {
  const query = identity.core.resourceStorage.getContent(RESOURCE_NAME.get)
  const payload = { parameter: { id: migrationId } }

  return identity.core.dbStorage.executeQuery(query, payload)
}

const insert = migrationId => {
  const query = identity.core.resourceStorage.getContent(RESOURCE_NAME.insert)
  const payload = { entity: { id: migrationId } }

  return identity.core.dbStorage.executeQuery(query, payload)
}

export const migration = {
  get,
  insert
}
