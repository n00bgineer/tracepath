// IMPORTING PACKAGES/MODULES
import { Tabs as MuiTabs } from '@mui/material'
import { styled } from '@mui/material/styles'

const Tabs = styled(MuiTabs)(() => ({
  '&.MuiTabs-root': {
    padding: '5px',
    background: 'rgba(230,230,230,0.2)',
    borderRadius: '9999px',
  },
}))

export default Tabs
