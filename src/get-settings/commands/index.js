import { getEnv } from 'src/get-settings/commands/get-env'
import { getDbUrl } from 'src/get-settings/commands/get-db-url'
import { getDbUsername } from 'src/get-settings/commands/get-db-username'
import { getDbPassword } from 'src/get-settings/commands/get-db-password'

export const commands = {
  getEnv,
  getDbUrl,
  getDbUsername,
  getDbPassword
}
