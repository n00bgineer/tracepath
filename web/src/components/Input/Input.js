// IMPORTING PACKAGES/MODULES
import {
  FormHelperText as MuiFormHelperText,
  OutlinedInput as MuiInput,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'

// CUSTOM ELEMENTS
const CustomInput = styled(MuiInput)(({ theme }) => ({
  // ROOT STYLES
  '&.MuiOutlinedInput-root': {
    borderRadius: '9999px',
  },
  '&.MuiOutlinedInput-root:hover': {
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
  },

  // MARGIN STYLES
  '&.MuiOutlinedInput-root.MuiOutlinedInput-margin-small': {
    marginBottom: '5px',
  },
  '&.MuiOutlinedInput-root.MuiOutlinedInput-margin-normal': {
    marginBottom: '10px',
  },
  '&.MuiOutlinedInput-root.MuiOutlinedInput-margin-large': {
    marginBottom: '20px',
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
  '&.MuiError.Mui-focused': {
    boxShadow: `0 0 15px ${theme.palette.error.main}`,
  },
}))
const CustomFormHelperText = styled(MuiFormHelperText)(() => ({
  '&.MuiFormHelperText-root': {
    margin: '10px 0px',
  },
}))

const Input = ({ margin, ...props }) => {
  // SETTING LOCAL VARIABLES
  // SETTING MARGIN CLASS
  let marginClass = ''
  if (margin === 'small') marginClass = 'MuiOutlinedInput-margin-small'
  else if (margin === 'medium') marginClass = 'MuiOutlinedInput-margin-normal'
  else if (margin === 'large') marginClass = 'MuiOutlinedInput-margin-large'

  return (
    <>
      <CustomInput
        {...props}
        className={(props.className ? props.className : '') + ' ' + marginClass}
        notched={false}
      />
      {props.formHelperText && !props.errorText && (
        <CustomFormHelperText>
          <Typography variant="body2">{props.formHelperText}</Typography>
        </CustomFormHelperText>
      )}
      {props.errorText && (
        <CustomFormHelperText>
          <Typography variant="body2" sx={{ color: 'error.main' }}>
            {props.errorText}
          </Typography>
        </CustomFormHelperText>
      )}
    </>
  )
}
export default Input
