import { identity } from 'src'

export const getDbUrl = () => {
  const defaultUrl = 'not-found'
  const dbSettings = identity.getSettings.repositories.settings.db()

  return identity.core.lodash.get(dbSettings, 'url', defaultUrl)
}
