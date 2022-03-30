import { identity } from 'src'
import { install } from 'source-map-support'

export const setupMaps = () => {
  if (identity.getSettings.commands.getEnv() !== identity.getSettings.ENV.local) return

  install()
}
