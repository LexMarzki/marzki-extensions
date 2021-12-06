import './index'

describe('Date extensions', () => {
  it('Can add hours', () => {
    const currentDate = new Date()
    const newDate = currentDate.addHours(1)
    expect(newDate.getTime() - currentDate.getTime() > 0).toBeTruthy()
  })
})
