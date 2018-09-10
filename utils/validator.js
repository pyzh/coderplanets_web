import R from 'ramda'

export const notEmpty = R.compose(
  R.not,
  R.isEmpty
)
export const isEmptyValue = R.compose(
  R.isEmpty,
  R.trim
)
export const nilOrEmpty = R.either(R.isNil, isEmptyValue)

export const hasValue = R.compose(
  R.not,
  nilOrEmpty
)

export const isObject = value => {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}

const notNil = R.compose(
  R.not,
  R.isNil
)

const validObjects = R.compose(
  R.pickBy(notNil),
  R.pickBy(isObject)
)

const validValues = R.compose(
  R.map(R.trim),
  R.pickBy(notNil),
  R.reject(isObject)
)

export const cast = (fields, source) => {
  const casted = R.pick(fields, source)

  return R.merge(validValues(casted), validObjects(casted))
}