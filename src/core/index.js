import * as ramda from 'ramda'
import * as lodash from 'lodash'
import { dbStorage } from 'src/core/db-storage'
import { grpcStorage } from 'src/core/grpc-storage'

export const core = {
  lodash,
  ramda,
  grpcStorage,
  dbStorage
}
