import { identity } from 'src'

export const getDbUsername = () => {
  const defaultUsername = 'not-found'
  const dbSettings = identity.getSettings.repositories.settings.db()

  return identity.core.lodash.get(dbSettings, 'username', defaultUsername)
}
