import { identity, rxjs } from 'src'
import credentials from 'src/seed-db/seeds/credentials.json'

const entities = () => rxjs.from(credentials)

const existence = () => rxjs.from(credentials)
  .pipe(rxjs.map(identity.seedDb.repositories.credentials.exists))
  .pipe(rxjs.concatMap(rxjs.from))

const nonexistentEntities = () => rxjs.zip(entities(), existence())
  .pipe(rxjs.filter(([_, exists]) => !exists))
  .pipe(rxjs.map(([entity]) => entity))

const insertionPipeline = () => nonexistentEntities()
  .pipe(rxjs.map(identity.seedDb.repositories.credentials.create))
  .pipe(rxjs.mergeMap(rxjs.from))

export const execute = () => {
  const pipeline = insertionPipeline().pipe(rxjs.defaultIfEmpty({}))

  return rxjs.lastValueFrom(pipeline)
}
