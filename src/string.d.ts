/* eslint-disable no-extend-native */
declare global {
  interface String {
    toDate(): Date
    toDateOnly(): Date
  }
}
export {}
