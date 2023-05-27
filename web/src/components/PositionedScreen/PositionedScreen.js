// IMPORTING PACKAGES/MODULES
import { Box } from '@mui/material'
import './positionedScreen.css'

const PositionedScreen = ({ children, ...props }) => {
  return (
    <Box className="positioned-screen" {...props}>
      {children}
    </Box>
  )
}

export default PositionedScreen
