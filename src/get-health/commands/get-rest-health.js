import { identity, rxjs } from 'src'

export const getRestHealth = () => rxjs.of({
  component: 'rest-server',
  status: identity.getHealth.STATUS.up,
})
