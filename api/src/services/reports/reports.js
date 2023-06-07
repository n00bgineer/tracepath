// IMPORTING PACKAGES/MODULES
import { RedwoodGraphQLError } from '@redwoodjs/graphql-server'

import config from 'src/global'
import { db } from 'src/lib/db'

export const reports = () => {
  return db.report.findMany({
    orderBy: [
      {
        createdAt: 'desc',
      },
    ],
    where: {
      isLighthouseError: false,
      isTracerouteError: false,
    },
  })
}

export const userReports = ({ id }) => {
  return db.report.findMany({
    orderBy: [
      {
        createdAt: 'desc',
      },
    ],
    where: {
      userId: id,
    },
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
  try {
    const response = await fetch(url, options)
    if (response.ok) {
      // GETTING REPORT BODY
      const report = await response.json()

      // SENDING RESPONSE
      return db.report.create({
        data: {
          ...report,
          userId: input.userId,
          reportVersion: config.LATEST_REPORT_VERSION,
          regionName: input.regionName,
        },
      })
    } else {
      // GETTING ERROR RESPONSE BODY
      const errorBody = await response.json()
      const errorMessage = errorBody.message
      throw errorMessage
    }
  } catch (err) {
    throw new RedwoodGraphQLError(err)
  }
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
