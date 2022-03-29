import { data } from 'src/data'
import * as grpc from '@grpc/grpc-js'
import * as loader from '@grpc/proto-loader'
import { catchError, map, of, timeout } from 'rxjs'

const service = () => {
  const definition = loader.loadSync('.dist/proto/health.proto')

  const Health = grpc.loadPackageDefinition(definition)['Identity']['Health']

  return new Health('localhost:5001', grpc.credentials.createInsecure())
}

const ping = () => data.grpcStorage.for(service()).invoke('Ping', {})
  .pipe(timeout(3000))
  .pipe(map(() => true))
  .pipe(catchError(() => of(false)))

export const repository = { ping }

