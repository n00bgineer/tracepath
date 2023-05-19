// IMPORTING PACKAGES/MODULES
import {
  Box,
  FormHelperText as MuiFormHelperText,
  OutlinedInput as MuiInput,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import './input.css'

// CUSTOM ELEMENTS
const CustomInput = styled(MuiInput)(({ theme }) => ({
  // ROOT STYLES
  '&.MuiOutlinedInput-root': {
    borderRadius: '9999px',
  },
  '&.MuiOutlinedInput-root:hover': {
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
  },

  // SIZE STYLES
  '&MuiInputBase-sizeSmall': {
    padding: '5px',
  },

  // ADORNMENT STYLES
  '&.MuiInputBase-adornedStart .MuiSvgIcon-root': {
    margin: '10px',
  },
  '&.MuiInputBase-adornedEnd .MuiSvgIcon-root': {
    margin: '10px',
  },

  // ICON STYLES
  '&.MuiInputBase-colorPrimary.Mui-focused .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
  },
  '&.MuiInputBase-colorSecondary.Mui-focused .MuiSvgIcon-root': {
    color: theme.palette.secondary.main,
  },
  '&.MuiInputBase-colorError.Mui-focused .MuiSvgIcon-root': {
    color: theme.palette.error.main,
  },
  '&.MuiInputBase-colorInfo.Mui-focused .MuiSvgIcon-root': {
    color: theme.palette.info.main,
  },
  '&.MuiInputBase-colorSuccess.Mui-focused .MuiSvgIcon-root': {
    color: theme.palette.success.main,
  },
  '&.Mui-error .MuiSvgIcon-root': {
    color: `${theme.palette.error.main}!important`,
  },

  // FOCUSED STYLES
  '&.MuiInputBase-colorPrimary.Mui-focused': {
    boxShadow: `0 0 15px ${theme.palette.primary.main}`,
  },
  '&.MuiInputBase-colorSecondary.Mui-focused': {
    boxShadow: `0 0 15px ${theme.palette.secondary.main}`,
  },
  '&.MuiInputBase-colorInfo.Mui-focused': {
    boxShadow: `0 0 15px ${theme.palette.info.main}`,
  },
  '&.MuiInputBase-colorError.Mui-focused': {
    boxShadow: `0 0 15px ${theme.palette.error.main}`,
  },
  '&.MuiInputBase-colorSuccess.Mui-focused': {
    boxShadow: `0 0 15px ${theme.palette.success.main}`,
  },
  '&.MuiError.Mui-focused': {
    boxShadow: `0 0 15px ${theme.palette.error.main}`,
  },
}))
const CustomFormHelperText = styled(MuiFormHelperText)(() => ({
  '&.MuiFormHelperText-root': {
    margin: '10px 0px',
    textAlign: 'center',
  },
}))

const Input = ({ margin, errorText, formHelperText, ...props }) => {
  // SETTING LOCAL VARIABLES
  // SETTING MARGIN CLASS
  let marginClass = ''
  if (margin === 'small') marginClass = 'MuiOutlinedInput-margin-small'
  else if (margin === 'medium') marginClass = 'MuiOutlinedInput-margin-medium'
  else if (margin === 'large') marginClass = 'MuiOutlinedInput-margin-large'

  return (
    <Box className={marginClass}>
      <CustomInput {...props} notched={false} />
      {formHelperText && !errorText && (
        <CustomFormHelperText>
          <Typography variant="body2">{formHelperText}</Typography>
        </CustomFormHelperText>
      )}
      {errorText && (
        <CustomFormHelperText component="div">
          <Typography variant="body2" sx={{ color: 'error.main' }}>
            {errorText}
          </Typography>
        </CustomFormHelperText>
      )}
    </Box>
  )
}
export default Input
