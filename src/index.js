import { core } from 'src/core'
import { seedDb } from 'src/seed-db'
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
  seedDb
}

export const rxjs = identity.core.rxjs

export const ramda = identity.core.ramda

export const lodash = identity.core.lodash

identity.setupMaps()

identity.migrateDb()
  .then(identity.seedDb)
  .then(identity.setupGrpc)
  .then(identity.setupRest)
