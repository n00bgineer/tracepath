import { useRecoilState } from 'recoil'

import UserCell from 'src/components/User/UserCell'
import { accountAtom } from 'src/contexts/atoms'

const UserPage = () => {
  // GETTING ATOMIC STATES
  const [account] = useRecoilState(accountAtom)

  return account !== null ? <UserCell id={account.guid} /> : <></>
}

export default UserPage
