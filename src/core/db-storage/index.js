import { getSettings } from 'src/core/db-storage/get-settings'
import { makeSession } from 'src/core/db-storage/make-session'
import { executeQuery } from 'src/core/db-storage/execute-query'

export const dbStorage = {
  executeQuery,
  getSettings,
  makeSession
}
