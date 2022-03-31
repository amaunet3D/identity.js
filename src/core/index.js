import glob from 'glob'
import * as ramda from 'ramda'
import * as lodash from 'lodash'
import { dbStorage } from 'src/core/db-storage'
import { grpcStorage } from 'src/core/grpc-storage'
import { resourceStorage } from 'src/core/resource-storage'

export const core = {
  lodash,
  ramda,
  glob,
  grpcStorage,
  dbStorage,
  resourceStorage
}
