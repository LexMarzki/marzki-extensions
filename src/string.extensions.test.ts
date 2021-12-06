import './index'

describe('String extensions', () => {
  it('Convert string to date', () => {
    const str = '2021-12-01'
    const date = str.toDate()
    expect(date).toBeDefined()
    expect(date).toBeInstanceOf(Date)
    expect(date.getFullYear()).toEqual(2021)
    expect(date.getMonth() + 1).toEqual(12)
    expect(date.getDate()).toEqual(1)
  })
})
