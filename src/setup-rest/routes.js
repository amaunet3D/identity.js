import { identity } from 'src'

const setup = server => {
  server.get('/health', identity.getHealth.controller)

  server.get('/version', identity.getVersion.controller)
}

export const routes = { setup }
