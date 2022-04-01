import { identity } from 'src'
import createQuery from 'src/seed-db/repositories/create-credentials.cypher'
import existsQuery from 'src/seed-db/repositories/credentials-exists.cypher'

const create = credentials => identity.core
  .dbStorage
  .executeQuery(createQuery, { entity: credentials })

const exists = credentials => identity.core
  .dbStorage
  .executeQuery(existsQuery, { parameter: credentials })

export const credentials = {
  exists,
  create
}
