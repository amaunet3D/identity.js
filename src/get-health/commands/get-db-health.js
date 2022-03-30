import { of } from 'rxjs'
import { identity } from 'src'

export const getDbHealth = () => of({
  component: 'database',
  status: identity.getHealth.STATUS.up,
  duration: '...'
})
