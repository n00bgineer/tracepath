// IMPORTING PACKAGES/MODULES
import { Input as MuiInput } from '@mui/material'
import { styled } from '@mui/material/styles'

const Input = styled(MuiInput)(({ theme }) => ({
  borderRadius: '9999px',
  '&.MuiInput-sizeSmall': {
    padding: '4px 8px',
    fontSize: '0.875rem',
  },
  '&.MuiInput-sizeMedium': {
    padding: '8px 16px',
    fontSize: '1rem',
  },
  '&.MuiInput-sizeLarge': {
    padding: '12px 24px',
    fontSize: '1.5rem',
    fontWeight: 'bolder',
  },
}))

export default Input
