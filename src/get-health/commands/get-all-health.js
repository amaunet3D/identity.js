import { identity, rxjs, lodash } from 'src'

const components = () => [
  identity.getHealth.commands.getGrpcHealth,
  identity.getHealth.commands.getRestHealth,
  identity.getHealth.commands.getDbHealth,
]

export const getAllHealth = () => {
  const executeLayer = getHealth => getHealth().pipe(rxjs.toArray())

  return rxjs
    .zip(lodash.map(components(), executeLayer))
    .pipe(map(lodash.flatten))
}
