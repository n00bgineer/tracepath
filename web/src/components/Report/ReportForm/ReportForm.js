// IMPORTING PACKAGES/MODULES
import { Link, Storage } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import './reportForm.css'
import Globe from 'react-globe.gl'

import Button from 'src/components/Button/Button'
import Input from 'src/components/Input/Input'
import Select from 'src/components/Select/Select'

const ReportForm = (props) => {
  // METHODS
  const onSubmit = (data) => {
    props.onSave(data, props?.report?.id)
  }

  // SETTING LOCAL VARIABLES
  const selectItems = [
    {
      label: '🇺🇸 Virginia',
      value: 'us-east-1a',
    },
    {
      label: '🇺🇸 Oregon',
      value: 'us-west-2a',
    },
    {
      label: '🇮🇳 India',
      value: 'ap-south-1a',
    },
    {
      label: '🇸🇪 Stockholm',
      value: 'eu-north-1a',
    },
  ]
  return (
    <Box className="report-form-globe-container">
      <Box
        className="report-form-container"
        sx={(theme) => {
          return { borderRight: `1px solid ${theme.palette.divider}` }
        }}
      >
        <Typography
          variant="body1"
          className="report-form-title"
          color="primary"
        >
          Generate Report
        </Typography>
        <Typography variant="body2" className="report-form-subtitle">
          Gain valuable insights for optimizing your application&rsquo;s
          performance through our comprehensive reports
        </Typography>
        <form>
          <Select
            fullWidth={true}
            margin="medium"
            label="📍 Select Server Location"
            placeholder="📍 Select Server Location"
            className="select-server"
            size="small"
            defaultValue="default"
            startAdornment={<Storage />}
            selectItems={selectItems}
          />
          <Input
            placeholder="Enter URL"
            required={true}
            startAdornment={<Link />}
            fullWidth={true}
            type="url"
            value={''}
            margin="medium"
            color={false === true ? 'error' : 'primary'}
            onInput={() => {}}
            errorText={''}
            label="email"
            size="small"
          />
          <Button
            margin="large"
            fullWidth={true}
            variant="contained"
            size="small"
            onClick={onSubmit}
          >
            Generate Report
          </Button>
        </form>
      </Box>
      <div className="report-globe-container">
        <Globe
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          zoom={5}
          bearing={1}
        />
      </div>
    </Box>
  )
}

export default ReportForm
