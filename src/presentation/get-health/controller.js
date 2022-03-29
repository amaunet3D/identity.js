import { tap } from 'rxjs'
import { data } from 'src/data'
import { domain } from 'src/domain'
import { presentation } from 'src/presentation'

const layers = () => [
  data.getHealth.command,
  presentation.getHealth.command,
]

export const controller = (request, response) => domain.getHealth
  .command(...layers())
  .pipe(tap(healths => response.status(200).json(healths)))
  .subscribe()
