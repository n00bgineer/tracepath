import { users, user, createUser, updateUser, deleteUser } from './users'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('users', () => {
  scenario('returns all users', async (scenario) => {
    const result = await users()

    expect(result.length).toEqual(Object.keys(scenario.user).length)
  })

  scenario('returns a single user', async (scenario) => {
    const result = await user({ id: scenario.user.one.id })

    expect(result).toEqual(scenario.user.one)
  })

  scenario('creates a user', async () => {
    const result = await createUser({
      input: {
        guid: 'String1496137',
        updateAt: '2023-05-26T21:08:48.680Z',
        lastLoginAt: '2023-05-26T21:08:48.680Z',
        userName: 'String4532992',
        email: 'String5994860',
      },
    })

    expect(result.guid).toEqual('String1496137')
    expect(result.updateAt).toEqual(new Date('2023-05-26T21:08:48.680Z'))
    expect(result.lastLoginAt).toEqual(new Date('2023-05-26T21:08:48.680Z'))
    expect(result.userName).toEqual('String4532992')
    expect(result.email).toEqual('String5994860')
  })

  scenario('updates a user', async (scenario) => {
    const original = await user({ id: scenario.user.one.id })
    const result = await updateUser({
      id: original.id,
      input: { guid: 'String23703102' },
    })

    expect(result.guid).toEqual('String23703102')
  })

  scenario('deletes a user', async (scenario) => {
    const original = await deleteUser({ id: scenario.user.one.id })
    const result = await user({ id: original.id })

    expect(result).toEqual(null)
  })
})
