import { identity } from 'src'

export const execute = () => {
  const query = identity.migrateDb.makeQueryFor(execute.id())

  return identity.core.dbStorage.executeQuery(query)
}

export const id = () => '1648670877965'
