import { identity, rxjs } from 'src'

export const controller = (request, response) => identity.getHealth.commands
  .getAllHealth()
  .pipe(rxjs.tap(healths => response.status(200).json(healths)))
  .subscribe()
