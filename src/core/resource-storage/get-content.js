import fs from 'fs'
import { identity } from 'src'

export const getContent = (pattern) => {
  const file = identity.core.glob
    .sync(`${__dirname}/**/${pattern}`)
    .at(0)

  return fs.readFileSync(file).toString()
}
