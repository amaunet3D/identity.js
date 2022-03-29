import { pingGrpc } from 'src/data/ping-grpc'
import { getHealth } from 'src/data/get-health'
import { grpcStorage } from 'src/data/grpc-storage'

export const data = { getHealth, grpcStorage, pingGrpc }
