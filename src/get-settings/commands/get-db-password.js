import { identity } from 'src'

export const getDbPassword = () => {
  const defaultPassword = 'not-found'
  const dbSettings = identity.getSettings.repositories.settings.db()

  return identity.core.lodash.get(dbSettings, 'password', defaultPassword)
}
