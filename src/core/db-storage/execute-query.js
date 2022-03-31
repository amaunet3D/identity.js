import { identity } from 'src'

const extractEntity = record => record?.get(0)?.properties

export const executeQuery = (query, payload = {}) => {
  const { driver, session } = identity.core.dbStorage.makeSession()

  return session.run(query, payload)
    .then(result => identity.core.lodash.map(result?.records, extractEntity))
    .finally(() => driver.close())
}
