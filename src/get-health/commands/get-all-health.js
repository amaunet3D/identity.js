import { identity } from 'src'
import { map, toArray, zip } from 'rxjs'

const components = () => [
  identity.getHealth.commands.getGrpcHealth,
  identity.getHealth.commands.getRestHealth,
  identity.getHealth.commands.getDbHealth,
]

export const getAllHealth = () => {
  const executeLayer = getHealth => getHealth().pipe(toArray())

  return zip(identity.core.lodash.map(components(), executeLayer))
    .pipe(map(identity.core.lodash.flatten))
}
