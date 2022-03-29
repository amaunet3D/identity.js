import { domain } from 'src/domain'
import { map, toArray, zip } from 'rxjs'

const getDomainHealth = () => ({
  component: 'domain',
  status: domain.getHealth.STATUS.up,
  duration: '...'
})

export const command = (...layers) => {
  const executeLayer = getHealth => getHealth().pipe(toArray())

  return zip(domain.core.lodash.map(layers, executeLayer))
    .pipe(map(domain.core.lodash.flatten))
    .pipe(map(others => [...others, getDomainHealth()]))
}
