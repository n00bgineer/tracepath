// IMPORTING PACKAGES/MODULES

import { useEffect, useState } from 'react'

import {
  Box,
  LinearProgress as MuiLinearProgress,
  Typography,
  styled,
} from '@mui/material'
import './splashModal.css'
import { useRecoilState } from 'recoil'

import { useAuth } from 'src/auth'
import { accountAtom } from 'src/contexts/atoms'

export const LinearProgress = styled(MuiLinearProgress)(() => ({
  '&.MuiLinearProgress-root': {
    minWidth: '200px',
    borderRadius: '9999px',
  },
}))

const SplashModal = () => {
  // SETTING LOCAL STATES
  const [progress, setProgress] = useState(0)
  const [loaderText, setLoaderText] = useState()

  // GETTING AUTH CONTEXT
  const { loading, isAuthenticated } = useAuth()

  // GETTING ATOMIC STATES
  const [account] = useRecoilState(accountAtom)

  useEffect(() => {
    console.log(loading, isAuthenticated, account)
    if (loading) {
      setLoaderText('Checking whether the user has logged in')
      setProgress(50)
    } else if (!isAuthenticated) {
      setLoaderText("User isn't logged in")
      setProgress(100)
    } else if (isAuthenticated && !account) {
      setLoaderText('Loading user data')
      setProgress(75)
    } else if (account) {
      setLoaderText('User data loaded')
      setProgress(100)
    }
  }, [loading, isAuthenticated, account])

  return (
    <Box
      className="full-modal splash-modal"
      sx={{ bgcolor: 'background.default' }}
    >
      <Box className="splash-modal-content-container">
        <img
          src="https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1683873993/tracepath/assets/logo1-cropped_hcmo16.png"
          alt="Tracepath logo"
          className="logo"
          loading="lazy"
        />
        <LinearProgress variant="determinate" value={progress} />
        <Typography variant="body2" color="grey" className="splash-loader-text">
          {loaderText}
        </Typography>
      </Box>
    </Box>
  )
}

export default SplashModal
