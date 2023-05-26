import {
  regions,
  region,
  createRegion,
  updateRegion,
  deleteRegion,
} from './regions'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('regions', () => {
  scenario('returns all regions', async (scenario) => {
    const result = await regions()

    expect(result.length).toEqual(Object.keys(scenario.region).length)
  })

  scenario('returns a single region', async (scenario) => {
    const result = await region({ id: scenario.region.one.id })

    expect(result).toEqual(scenario.region.one)
  })

  scenario('creates a region', async () => {
    const result = await createRegion({
      input: {
        updateAt: '2023-05-26T21:07:54.520Z',
        expiryAt: '2023-05-26T21:07:54.520Z',
        name: 'String',
        regionName: 'String3446882',
        ipAddress: 'String9989734',
        portNo: 'String',
      },
    })

    expect(result.updateAt).toEqual(new Date('2023-05-26T21:07:54.520Z'))
    expect(result.expiryAt).toEqual(new Date('2023-05-26T21:07:54.520Z'))
    expect(result.name).toEqual('String')
    expect(result.regionName).toEqual('String3446882')
    expect(result.ipAddress).toEqual('String9989734')
    expect(result.portNo).toEqual('String')
  })

  scenario('updates a region', async (scenario) => {
    const original = await region({ id: scenario.region.one.id })
    const result = await updateRegion({
      id: original.id,
      input: { updateAt: '2023-05-27T21:07:54.520Z' },
    })

    expect(result.updateAt).toEqual(new Date('2023-05-27T21:07:54.520Z'))
  })

  scenario('deletes a region', async (scenario) => {
    const original = await deleteRegion({
      id: scenario.region.one.id,
    })
    const result = await region({ id: original.id })

    expect(result).toEqual(null)
  })
})
