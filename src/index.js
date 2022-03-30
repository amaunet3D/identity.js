import { core } from 'src/core'
import { pingGrpc } from 'src/ping-grpc'
import { authGame } from 'src/auth-game'
import { setupRest } from 'src/setup-rest'
import { setupGrpc } from 'src/setup-grpc'
import { authWorld } from 'src/auth-world'
import { getHealth } from 'src/get-health'
import { authClient } from 'src/auth-client'
import { getVersion } from 'src/get-version'

export const identity = {
  core,
  authGame,
  authClient,
  authWorld,
  getHealth,
  getVersion,
  pingGrpc,
  setupGrpc,
  setupRest,
}

identity.setupGrpc()
identity.setupRest()
