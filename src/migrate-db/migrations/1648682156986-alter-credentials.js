import { identity } from 'src'
import query from 'src/migrate-db/migrations/1648682156986-alter-credentials.cypher'

export const execute = () => identity.core
  .dbStorage
  .executeQuery(query)

export const id = () => '1648682156986'
