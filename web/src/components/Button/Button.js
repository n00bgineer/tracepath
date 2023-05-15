// IMPORTING PACKAGES/MODULES
import { Button as MuiButton } from '@mui/material'
import { styled } from '@mui/material/styles'

const Button = styled(MuiButton)(({ theme }) => ({
  borderRadius: '9999px',
  textTransform: 'none',
  '&.MuiButton-outlined': {
    borderWidth: '2px',
  },
  '&.MuiButton-sizeSmall': {
    padding: '4px 8px',
    fontSize: '0.875rem',
  },
  '&.MuiButton-sizeMedium': {
    padding: '8px 16px',
    fontSize: '1rem',
  },
  '&.MuiButton-iconSizeMedium': {
    fontSize: '1rem',
  },
  '&.MuiButton-sizeLarge': {
    padding: '12px 24px',
    fontSize: '1.5rem',
    fontWeight: 'bolder',
  },
  '& .MuiButton-iconSizeLarge': {
    fontSize: '1.5rem',
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
        ? '0 0 15px rgba(0, 0, 0, 0.5)'
        : '0 0 15px rgba(29,148,73, 0.5)',
    filter: 'brightness(120%)',
  },
}))

export default Button
