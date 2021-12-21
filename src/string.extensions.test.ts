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

  it('Extract by delimiter first word', () => {
    const str = 'test@mail.com'
    const name = str.extract('@')
    expect(name).toBeDefined()
    expect(name).toEqual('test')
  })

  it('Extract by delimiter word after', () => {
    const str = 'test@mail.com'
    const name = str.extract('@', Position.after)
    expect(name).toBeDefined()
    expect(name).toEqual('mail.com')
  })

  it('Unable to find delimiter', () => {
    const str = 'testmail.com'
    const name = str.extract('@')
    expect(name).toBeDefined()
    expect(name.length).toEqual(0)
  })
})
