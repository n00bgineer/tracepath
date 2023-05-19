import { Box, Typography } from '@mui/material'
import './footer.css'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={(theme) => {
        return {
          background: `linear-gradient(to top, ${theme.palette.secondary.dark}, ${theme.palette.secondary.main}, ${theme.palette.secondary.main})`,
        }
      }}
    >
      <Box className="brand-info-container">
        <Box className="brand-logo-container">
          <img
            src="https://res.cloudinary.com/dgu9rv3om/image/upload/v1683873993/tracepath/assets/logo1-cropped_hcmo16.png"
            alt="Tracepath logo"
            className="logo"
          />
          <Typography variant="body1" className="brand-name">
            Tracepath
          </Typography>
        </Box>
        <Typography variant="body1">
          Application Monitoring Simplified
        </Typography>
      </Box>
      <Typography variant="body1" className="footer-copyright">
        Copyright &copy; n00bgineer 2023
      </Typography>
    </Box>
  )
}

export default Footer
