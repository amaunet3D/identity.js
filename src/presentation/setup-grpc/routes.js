import { presentation } from 'src/presentation'

const setupAuthService = server => server.addService(presentation.setupGrpc.services.auth().service, {
  Client: presentation.authClient.controller,
  World: presentation.authWorld.controller,
  Game: presentation.authGame.controller,
})

const setup = server => {
  setupAuthService(server)
}

export const routes = { setup }
