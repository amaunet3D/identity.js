MATCH (credentials:Credentials)
  WHERE
  credentials.username = $parameter.username AND
  credentials.password = $parameter.password
RETURN
  {
    exists: count(credentials) > 0
  }

