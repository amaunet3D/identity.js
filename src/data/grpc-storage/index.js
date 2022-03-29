import { invoke } from 'src/data/grpc-storage/invoke'
import { discuss } from 'src/data/grpc-storage/discuss'

const storageFor = service => ({
  invoke: invoke(service),
  discuss: discuss(service)
})

export const grpcStorage = { for: storageFor }
