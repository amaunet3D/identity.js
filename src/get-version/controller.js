import { identity } from 'src'

export const controller = (request, response) => {
  const version = identity.getVersion.commands.getVersion()

  response.json(version)
}
