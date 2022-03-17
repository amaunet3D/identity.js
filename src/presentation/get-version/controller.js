import { domain } from 'src/domain'

export const controller = (request, response) => {
  const version = domain.getVersion.command()

  response.json(version)
}
