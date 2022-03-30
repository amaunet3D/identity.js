import { tap } from 'rxjs'
import { identity } from 'src'

export const controller = (request, response) => identity.getHealth.commands
  .getAllHealth()
  .pipe(tap(healths => response.status(200).json(healths)))
  .subscribe()
