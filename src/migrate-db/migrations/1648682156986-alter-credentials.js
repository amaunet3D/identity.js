import { identity } from 'src'

export const execute = () => {
  const query = identity.migrateDb.makeQueryFor(id())

  return identity.core.dbStorage.executeQuery(query)
}

export const id = () => '1648682156986'
