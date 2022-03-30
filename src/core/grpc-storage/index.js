import { invoke } from 'src/core/grpc-storage/invoke'
import { discuss } from 'src/core/grpc-storage/discuss'

const storageFor = service => ({
  invoke: invoke(service),
  discuss: discuss(service)
})

export const grpcStorage = { for: storageFor }
