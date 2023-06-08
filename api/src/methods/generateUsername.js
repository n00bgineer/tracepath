// IMPORTING PACKAGES/MODULES
import { db } from 'src/lib/db'
/**
 * @name generateUsername
 * @description METHOD TO GENERATE USERNAME
 * @param {*} email EMAIL
 * @param {*} guid GOOGLE ID
 * @returns {String} USERNAME
 */
const generateUsername = async (email, guid) => {
  // SETTING LOCAL VARIABLES
  const emailUsername = email.split('@')[0]

  // CHECKING IF THE EMAIL USERNAME EXISTS
  const user = await db.user.findUnique({
    where: {
      userName: emailUsername,
    },
  })
  return user === null
    ? emailUsername
    : `${emailUsername}-${guid.substring(0, 5)}`
}

export default generateUsername
