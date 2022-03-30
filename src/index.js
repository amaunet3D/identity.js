import { core } from 'src/core'
import { pingGrpc } from 'src/ping-grpc'
import { authGame } from 'src/auth-game'
import { setupRest } from 'src/setup-rest'
import { setupGrpc } from 'src/setup-grpc'
import { setupMaps } from 'src/setup-maps'
import { authWorld } from 'src/auth-world'
import { getHealth } from 'src/get-health'
import { migrateDb } from 'src/migrate-db'
import { authClient } from 'src/auth-client'
import { getVersion } from 'src/get-version'
import { getSettings } from 'src/get-settings'

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
  setupMaps,
  getSettings,
  migrateDb,
}

identity.setupMaps()
identity.setupGrpc()
identity.setupRest()
identity.migrateDb()
