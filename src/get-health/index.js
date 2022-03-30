import { STATUS } from 'src/get-health/status'
import { commands } from 'src/get-health/commands'
import { controller } from 'src/get-health/controller'
import { repositories } from 'src/get-health/repositories'

export const getHealth = {
  controller,
  STATUS,
  commands,
  repositories
}
