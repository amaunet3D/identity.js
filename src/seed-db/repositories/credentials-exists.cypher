MATCH (credentials:Credentials)
  WHERE
  credentials.username = $parameter.username AND
  credentials.password = $parameter.password
RETURN
  {
    id:       credentials.id,
    username: credentials.username,
    password: credentials.password
  }
