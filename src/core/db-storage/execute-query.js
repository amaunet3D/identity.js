import { identity, ramda } from 'src'

const extractEntity = record => record?.get(0)

export const executeQuery = (query, payload = {}) => {
  const { driver, session } = identity.core.dbStorage.makeSession()

  return session.run(query, payload)
    .then(result => result?.records)
    .then(ramda.map(extractEntity))
    .finally(() => driver.close())
}
