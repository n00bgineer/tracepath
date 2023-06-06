// IMPORTING PACKAGES/MODULES
import { db } from 'src/lib/db'

export const regions = () => {
  return db.region
    .findMany({
      // REMOVE WHILE TESTING LOCALLY
      where: {
        NOT: {
          regionName: {
            contains: 'local',
          },
        },
      },
    })
    .then(async (regions) => {
      return await Promise.all(
        regions.map(async (region) => {
          try {
            const response = await fetch(
              `http://${region.ipAddress}:${region.portNo}/api/status`
            )

            if (response.status === 200) {
              return { ...region, status: 'OK' }
            } else {
              return { ...region, status: 'NOK' }
            }
          } catch (error) {
            return { ...region, status: 'NOK' }
          }
        })
      )
    })
}

export const region = ({ id }) => {
  return db.region.findUnique({
    where: { id },
  })
}

export const createRegion = ({ input }) => {
  return db.region.create({
    data: input,
  })
}

export const updateRegion = ({ id, input }) => {
  return db.region.update({
    data: input,
    where: { id },
  })
}

export const deleteRegion = ({ id }) => {
  return db.region.delete({
    where: { id },
  })
}

export const Region = {
  Reports: (_obj, { root }) => {
    return db.region.findUnique({ where: { id: root?.id } }).Reports()
  },
}
