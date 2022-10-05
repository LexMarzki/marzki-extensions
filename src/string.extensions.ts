/* eslint-disable @typescript-eslint/no-unused-vars */
interface String {
  toDate(): Date
  toDateOnly(): Date
  extract(delimiter: string, position?: Position): string
}

const enum Position {
  before,
  after,
}

// eslint-disable-next-line no-extend-native
String.prototype.toDate = function () {
  const { format } = require('date-fns')

  return new Date(this as string)
}

String.prototype.toDateOnly = function () {
  const { format } = require('date-fns')

  return new Date(format(new Date(this as string), 'yyyy-MM-dd'))
}

String.prototype.extract = function (delimiter: string, position?: Position): string {
  const post = position ?? Position.before
  const index = this.search(delimiter)
  if (this.length === 0 || index < 0) return ''
  return post === Position.before
    ? this.substring(0, index)
    : this.substring(index + 1, this.length)
}
