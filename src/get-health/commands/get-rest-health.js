import { of } from 'rxjs'
import { identity } from 'src'

export const getRestHealth = () => of({
  component: 'rest-server',
  status: identity.getHealth.STATUS.up,
  duration: '...'
})
