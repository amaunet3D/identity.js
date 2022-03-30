import { identity } from 'src'
import neo4j from 'neo4j-driver'

export const makeSession = () => {
  const settings = identity.core.dbStorage.getSettings()
  const driver = neo4j.driver(settings.url, neo4j.auth.basic(settings.username, settings.password))

  return { driver, session: driver.session() }
}

