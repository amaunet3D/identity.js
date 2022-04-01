import { identity, rxjs } from 'src'

export const getDbHealth = () => rxjs.of({
  component: 'database',
  status: identity.getHealth.STATUS.up,
})
