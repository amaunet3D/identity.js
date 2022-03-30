import { identity } from 'src'

const DEFAULT_ENV = 'local'

export const getEnv = () => {
  const miscSettings = identity.getSettings.repositories.settings.misc()

  return identity.core.lodash.get(miscSettings, 'environment', DEFAULT_ENV)
}
