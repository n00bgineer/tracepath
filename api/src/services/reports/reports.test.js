import {
  reports,
  report,
  createReport,
  updateReport,
  deleteReport,
} from './reports'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('reports', () => {
  scenario('returns all reports', async (scenario) => {
    const result = await reports()

    expect(result.length).toEqual(Object.keys(scenario.report).length)
  })

  scenario('returns a single report', async (scenario) => {
    const result = await report({ id: scenario.report.one.id })

    expect(result).toEqual(scenario.report.one)
  })

  scenario('creates a report', async (scenario) => {
    const result = await createReport({
      input: {
        userId: scenario.report.two.userId,
        updateAt: '2023-05-26T21:08:39.203Z',
        reportVersion: 'String',
        executionTime: 7044812.07829525,
        regionName: scenario.report.two.regionName,
        url: 'String',
      },
    })

    expect(result.userId).toEqual(scenario.report.two.userId)
    expect(result.updateAt).toEqual(new Date('2023-05-26T21:08:39.203Z'))
    expect(result.reportVersion).toEqual('String')
    expect(result.executionTime).toEqual(7044812.07829525)
    expect(result.regionName).toEqual(scenario.report.two.regionName)
    expect(result.url).toEqual('String')
  })

  scenario('updates a report', async (scenario) => {
    const original = await report({ id: scenario.report.one.id })
    const result = await updateReport({
      id: original.id,
      input: { updateAt: '2023-05-27T21:08:39.203Z' },
    })

    expect(result.updateAt).toEqual(new Date('2023-05-27T21:08:39.203Z'))
  })

  scenario('deletes a report', async (scenario) => {
    const original = await deleteReport({
      id: scenario.report.one.id,
    })
    const result = await report({ id: original.id })

    expect(result).toEqual(null)
  })
})
