import { authGame } from 'src/presentation/auth-game'
import { pingGrpc } from 'src/presentation/ping-grpc'
import { setupRest } from 'src/presentation/setup-rest'
import { setupGrpc } from 'src/presentation/setup-grpc'
import { getHealth } from 'src/presentation/get-health'
import { authWorld } from 'src/presentation/auth-world'
import { getVersion } from 'src/presentation/get-version'
import { authClient } from 'src/presentation/auth-client'

export const presentation = {
  getHealth,
  getVersion,
  authClient,
  authGame,
  authWorld,
  setupGrpc,
  setupRest,
  pingGrpc,
}
