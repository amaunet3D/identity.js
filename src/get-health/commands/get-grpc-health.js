import { identity, rxjs } from 'src'

const makeSuccess = () => ({
  component: 'grpc-server',
  status: identity.getHealth.STATUS.up,
})

const makeFailure = () => ({
  component: 'grpc-server',
  status: identity.getHealth.STATUS.down,
})

const chooseResult = result => ({
  [true]: makeSuccess(),
  [false]: makeFailure(),
})[result]

export const getGrpcHealth = () => identity.getHealth.repositories.grpc
  .ping()
  .pipe(rxjs.map(chooseResult))
