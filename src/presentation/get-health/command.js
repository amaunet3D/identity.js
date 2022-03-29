import { data } from 'src/data'
import { domain } from 'src/domain'
import { concat, map, of } from 'rxjs'

const makeGrpcSuccess = () => ({
  component: 'grpc-server',
  status: domain.getHealth.STATUS.up,
  duration: '...'
})

const makeGrpcFailure = () => ({
  component: 'grpc-server',
  status: domain.getHealth.STATUS.down,
  duration: '...',
})

const chooseGrpcResult = result => ({
  [true]: makeGrpcSuccess(),
  [false]: makeGrpcFailure(),
})[result]

const getGrpcHealth = () => data.pingGrpc.repository
  .ping()
  .pipe(map(chooseGrpcResult))

const getRestHealth = () => of({
  component: 'rest-server',
  status: domain.getHealth.STATUS.up,
  duration: '...'
})

export const command = () => concat(
  getGrpcHealth(),
  getRestHealth()
)
