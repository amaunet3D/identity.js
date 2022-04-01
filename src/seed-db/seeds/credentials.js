import { identity, rxjs } from 'src'
import credentials from 'src/seed-db/seeds/credentials.json'

export const execute = () => rxjs
  .from(credentials)
  .pipe(rxjs.map(identity.seedDb.repositories.credentials.exists))
  .pipe(rxjs.concatMap(rxjs.from))
  .subscribe()
