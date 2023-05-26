import { db } from 'src/lib/db'

export const regions = () => {
  return db.region.findMany()
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
