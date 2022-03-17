import { presentation } from 'src/presentation'

const setup = server => {
  server.get('/health', presentation.getHealth.controller)

  server.get('/version', presentation.getVersion.controller)
}

export const routes = { setup }
