/* eslint-disable @typescript-eslint/no-unused-vars */
interface Date {
  addHours(hour: number): Date
}

// eslint-disable-next-line no-extend-native
Date.prototype.addHours = function (hour: number) {
  const date = Object.assign(new Date(), this)
  date.setTime(date.getTime() + hour * 60 * 60 * 1000)
  return date
}
