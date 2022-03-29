import { of } from 'rxjs'
import { domain } from 'src/domain'

export const command = () => of({
  component: 'data',
  status: domain.getHealth.STATUS.up,
  duration: '...'
})
