export const migrateDb = () => {
  const migrationsImporter = require?.context('./migrations', true, /\.js$/)

  migrationsImporter?.keys()
    .map(migrationsImporter)
    .map(migration => migration.execute())
}
