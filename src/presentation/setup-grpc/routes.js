import { presentation } from 'src/presentation'

const setupAuthService = server => server.addService(presentation.setupGrpc.services.auth().service, {
  Client: presentation.authClient.controller,
  World: presentation.authWorld.controller,
  Game: presentation.authGame.controller,
})

const setupHealthService = server => server.addService(presentation.setupGrpc.services.health().service, {
  Ping: presentation.pingGrpc.controller
})

const setup = server => {
  setupAuthService(server)
  setupHealthService(server)
}

export const routes = { setup }
