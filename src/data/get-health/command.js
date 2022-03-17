import { domain } from 'src/domain'

export const command = () => [{
  component: 'data',
  status: domain.getHealth.STATUS.up,
  duration: '...'
}]
