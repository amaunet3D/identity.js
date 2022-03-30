import { identity } from 'src'
import * as grpcJs from '@grpc/grpc-js'
import * as loader from '@grpc/proto-loader'
import { catchError, map, of, timeout } from 'rxjs'

const service = () => {
  const definition = loader.loadSync('.dist/proto/health.proto')

  const Health = grpcJs.loadPackageDefinition(definition)['Identity']['Health']

  return new Health('localhost:5001', grpcJs.credentials.createInsecure())
}

const ping = () => identity.core.grpcStorage.for(service()).invoke('Ping', {})
  .pipe(timeout(3000))
  .pipe(map(() => true))
  .pipe(catchError(() => of(false)))

export const grpc = { ping }

