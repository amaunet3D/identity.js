MATCH (migration:Migration)
  WHERE migration.id = $parameter.id
RETURN {id: migration.id}
