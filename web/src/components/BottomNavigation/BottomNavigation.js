// IMPORTING PACKAGES/MODULES

import { useEffect, useState } from 'react'

import {
  Divider,
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationAction as MuiBottomNavigationAction,
  Paper,
  styled,
} from '@mui/material'

import './bottomNavigation.css'
import { Link as RedwoodLink } from '@redwoodjs/router'

// CUSTOM COMPONENTS
const CustomBottomNavigation = styled(MuiBottomNavigation)(() => ({
  '&.MuiBottomNavigation-root': {
    height: '66px',
  },
}))
const BottomNavigationAction = styled(MuiBottomNavigationAction)(
  ({ theme }) => ({
    '&.MuiBottomNavigationAction-root': {
      padding: '10px',
    },
    '&.MuiBottomNavigationAction-root.Mui-selected > .MuiSvgIcon-root': {
      background: `linear-gradient(to top, ${theme.palette.primary.dark}, ${theme.palette.primary.main}, ${theme.palette.primary.main})`,
      backgroundClip: 'text',
      textFillColor: 'transparent',
    },
    '&.Mui-selected': {
      fontSize: '15px',
      fontWeight: 'bold',
    },
    '& .MuiBottomNavigationAction-label': {
      fontSize: '15px',
      marginTop: '2px',
    },
  })
)

const BottomNavigation = ({ topActions, ...props }) => {
  // SETTING LOCAL VARIABLES
  const { pathname } = window.location

  // SETTING LOCAL STATES
  const [bottomNavigationValue, setBottomNavigationValue] = useState(
    setDefaultNavigation()
  )

  // METHODS
  /**
   * @name setDefaultNavigation
   * @description SETTING VALUE FOR BOTTOM NAVIGATION
   * @returns {INDEX}
   */
  function setDefaultNavigation() {
    try {
      topActions.forEach((topActionItem, index) => {
        if (topActionItem.link === pathname) throw index
      })
    } catch (err) {
      return err
    }
  }

  useEffect(() => {
    if (pathname === '/generate') setBottomNavigationValue(0)
    else if (pathname === '/explore') setBottomNavigationValue(1)
    else if (pathname === '/account') setBottomNavigationValue(2)
    else setBottomNavigationValue(-1)
  }, [pathname])

  return (
    <>
      <Paper elevation={3} className="bottom-navigation-paper">
        <Divider />
        <CustomBottomNavigation
          {...props}
          showLabels
          value={bottomNavigationValue}
          onChange={(event, newValue) => {
            setBottomNavigationValue(newValue)
          }}
        >
          {topActions.map((topActionItem) => {
            return (
              <BottomNavigationAction
                component={RedwoodLink}
                to={topActionItem.link}
                key={topActionItem.label}
                label={topActionItem.label}
                icon={topActionItem.selectedIcon}
              />
            )
          })}
        </CustomBottomNavigation>
      </Paper>
    </>
  )
}

export default BottomNavigation
