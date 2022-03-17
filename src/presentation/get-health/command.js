import { domain } from 'src/domain'

export const command = () => ({
  component: 'presentation',
  status: domain.getHealth.STATUS.up,
  duration: '...'
})
