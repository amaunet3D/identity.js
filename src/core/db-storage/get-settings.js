import { identity } from 'src'

export const getSettings = () => ({
  url: identity.getSettings.commands.getDbUrl(),
  username: identity.getSettings.commands.getDbUsername(),
  password: identity.getSettings.commands.getDbPassword()
})
