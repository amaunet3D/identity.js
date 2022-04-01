import { identity } from 'src'
import query from 'src/migrate-db/migrations/1648681744487-create-credentials.cypher'

export const execute = () => identity.core
  .dbStorage
  .executeQuery(query)

export const id = () => '1648681744487'
