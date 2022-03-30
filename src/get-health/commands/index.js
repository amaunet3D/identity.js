import { getDbHealth } from 'src/get-health/commands/get-db-health'
import { getAllHealth } from 'src/get-health/commands/get-all-health'
import { getRestHealth } from 'src/get-health/commands/get-rest-health'
import { getGrpcHealth } from 'src/get-health/commands/get-grpc-health'

export const commands = {
  getAllHealth,
  getDbHealth,
  getRestHealth,
  getGrpcHealth
}
