import * as grpc from '@grpc/grpc-js'
import { routes } from 'src/setup-grpc/routes'
import { services } from 'src/setup-grpc/services'

const PORT = '0.0.0.0:5001'

const CREDENTIALS = grpc.ServerCredentials.createInsecure()

const setupServer = server => () => {
  routes.setup(server)

  server.start()

  console.log(`Grpc server is listening on ${PORT}...`)
}

export const setupGrpc = () => {
  const server = new grpc.Server()

  server.bindAsync(PORT, CREDENTIALS, setupServer(server))
}

setupGrpc.services = services
