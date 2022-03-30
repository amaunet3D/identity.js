import { map } from 'rxjs'
import { identity } from 'src'

const makeSuccess = () => ({
  component: 'grpc-server',
  status: identity.getHealth.STATUS.up,
  duration: '...'
})

const makeFailure = () => ({
  component: 'grpc-server',
  status: identity.getHealth.STATUS.down,
  duration: '...',
})

const chooseResult = result => ({
  [true]: makeSuccess(),
  [false]: makeFailure(),
})[result]

export const getGrpcHealth = () => identity.getHealth.repositories.grpc
  .ping()
  .pipe(map(chooseResult))
