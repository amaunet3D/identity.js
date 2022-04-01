CREATE (credentials:Credentials
       {
         username: $entity.username,
         password: $entity.password
       })
RETURN {
         id:       credentials.id,
         username: credentials.username,
         password: credentials.password
       }
