import * as ramda from 'ramda'
import * as lodash from 'lodash'

export const core = {
  curry: ramda.curry,
  set: lodash.set,
  get: lodash.get,
  map: lodash.map,
  flatten: lodash.flatten,
}
