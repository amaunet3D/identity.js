import { identity } from 'src'

const setupAuthService = server => server.addService(identity.setupGrpc.services.auth().service, {
  Client: identity.authClient.controller,
  World: identity.authWorld.controller,
  Game: identity.authGame.controller,
})

const setupHealthService = server => server.addService(identity.setupGrpc.services.health().service, {
  Ping: identity.pingGrpc.controller
})

const setup = server => {
  setupAuthService(server)
  setupHealthService(server)
}

export const routes = { setup }
