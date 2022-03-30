import * as grpc from '@grpc/grpc-js'
import * as loader from '@grpc/proto-loader'

const makePath = name => `.dist/proto/${name}`

const auth = () => {
  const definition = loader.loadSync(makePath('auth.proto'))

  return grpc.loadPackageDefinition(definition)['Identity']['Auth']
}

const health = () => {
  const definition = loader.loadSync(makePath('health.proto'))

  return grpc.loadPackageDefinition(definition)['Identity']['Health']
}

export const services = { auth, health }
