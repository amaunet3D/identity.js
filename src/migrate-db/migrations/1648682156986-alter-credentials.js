import { identity } from 'src'

export const execute = () => {
  const query = identity.core.resourceStorage.getContent(`${id()}-*.cypher`)

  return identity.core.dbStorage.executeQuery(query)
}

export const id = () => '1648682156986'
