import { domain } from 'src/domain'

const getDomainHealth = () => ({
  component: 'domain',
  status: domain.getHealth.STATUS.up,
  duration: '...'
})

export const command = (...layers) => {
  const others = domain.core.map(layers, getHealth => getHealth())

  return [getDomainHealth(), ...domain.core.flatten(others)]

}
