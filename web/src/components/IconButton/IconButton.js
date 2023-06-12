// IMPORTING PACKAGES/MODULES
import { IconButton as MuiIconButton } from '@mui/material'
import { styled } from '@mui/material/styles'

const IconButton = styled(MuiIconButton)(({ theme }) => ({
  '&.MuiIconButton-root': {
    borderRadius: '40%',
  },
  '&.primary-grad': {
    background: `linear-gradient(to top, ${theme.palette.primary.dark}, ${theme.palette.primary.main}, ${theme.palette.primary.main})`,
  },
  '&.secondary-grad': {
    background: `linear-gradient(to top, ${theme.palette.secondary.dark}, ${theme.palette.secondary.main}, ${theme.palette.secondary.main})`,
  },
  '&.primary-grad:hover, &.secondary-grad:hover': {
    boxShadow:
      theme.palette.mode === 'light'
        ? '0 0 5px rgba(0, 0, 0, 0.5)'
        : '0 0 5px rgba(29,148,73, 0.5)',
    filter: 'brightness(120%)',
  },
}))

export default IconButton
