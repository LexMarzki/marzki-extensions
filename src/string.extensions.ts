/* eslint-disable @typescript-eslint/no-unused-vars */
interface String {
  toDate(): Date
}

// eslint-disable-next-line no-extend-native
String.prototype.toDate = function () {
  const { format } = require('date-fns')

  return new Date(format(new Date(this as string), 'yyyy-MM-dd'))
}
