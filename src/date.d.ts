/* eslint-disable no-extend-native */
declare global {
  interface Date {
    addHours(hour: number): Date
  }
}
export {}
