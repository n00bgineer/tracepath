import config from 'src/global'
import { db } from 'src/lib/db'

export const reports = () => {
  return db.report.findMany({
    orderBy: [
      {
        createdAt: 'desc',
      },
    ],
  })
}

export const report = ({ id }) => {
  return db.report.findUnique({
    where: { id },
  })
}

export const createReport = async ({ input }) => {
  // GETTING SERVER DETAILS
  const server = await db.region.findUnique({
    where: {
      regionName: input.regionName,
    },
  })

  // RECONSTRUCTING SERVER URL & SETTING REQUEST OPTION
  const url = `http://${server.ipAddress}:${server.portNo}/api/report`
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url: input.url,
    }),
  }

  // CALLING ENDPOINT
  const response = await fetch(url, options)
  const report = await response.json()

  // SENDING RESPONSE
  return db.report.create({
    data: {
      ...report,
      reportVersion: config.LATEST_REPORT_VERSION,
      regionName: input.regionName,
    },
  })
}

export const updateReport = ({ id, input }) => {
  return db.report.update({
    data: input,
    where: { id },
  })
}

export const deleteReport = ({ id }) => {
  return db.report.delete({
    where: { id },
  })
}

export const Report = {
  User: (_obj, { root }) => {
    return db.report.findUnique({ where: { id: root?.id } }).User()
  },
  Region: (_obj, { root }) => {
    return db.report.findUnique({ where: { id: root?.id } }).Region()
  },
}
