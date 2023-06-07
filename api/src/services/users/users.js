// IMPORTING PACKAGES/MODULES
import { db } from 'src/lib/db'
import generateUsername from 'src/methods/generateUsername'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findUnique({
    where: { guid: id },
  })
}

export const createUser = async ({ input }) => {
  // SETTING USER NAME
  const userName = await generateUsername(input.email, input.guid)

  return db.user.create({
    data: { ...input, userName: userName },
  })
}

export const createGoogleUser = async ({ input }) => {
  // SETTING USER NAME
  const userName = await generateUsername(input.email, input.guid)

  return db.user.upsert({
    where: {
      guid: input.guid,
    },
    update: { userName: input.useName },
    create: { ...input, userName: userName },
  })
}

export const updateUser = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User = {
  Reports: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).Reports()
  },
}
