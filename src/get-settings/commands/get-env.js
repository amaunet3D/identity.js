import { identity } from 'src'

export const getEnv = () => {
  const defaultEnv = identity.getSettings.ENV.local
  const miscSettings = identity.getSettings.repositories.settings.misc()

  return identity.core.lodash.get(miscSettings, 'environment', defaultEnv)
}
