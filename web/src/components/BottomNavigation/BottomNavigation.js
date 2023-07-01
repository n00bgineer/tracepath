// IMPORTING PACKAGES/MODULES
import { useEffect, useState } from 'react'

import {
  Divider,
  Paper as MuiPaper,
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationAction as MuiBottomNavigationAction,
  styled,
} from '@mui/material'

import { Link as RedwoodLink } from '@redwoodjs/router'

// CUSTOM COMPONENTS
// CUSTOM PAPER COMPONENT ENCAPSULATING BOTTOM NAVIGATION & BOTTOM NAVIGATION ACTION COMPONENTS
const CustomPaper = styled(MuiPaper)(() => ({
  '&.MuiPaper-root': {
    bottom: '0',
    left: '0',
    position: 'fixed',
    right: '0',
    zIndex: '1200',
  },
}))
// CUSTOM BOTTOM NAVIGATION COMPONENT
const CustomBottomNavigation = styled(MuiBottomNavigation)(() => ({
  '&.MuiBottomNavigation-root': {
    height: '66px',
  },
}))
// CUSTOM BOTTOM NAVIGATION ELEMENT COMPONENT
const CustomBottomNavigationAction = styled(MuiBottomNavigationAction)(
  ({ theme }) => ({
    '&.MuiBottomNavigationAction-root': {
      padding: '10px',
    },
    '&.MuiBottomNavigationAction-root.Mui-selected > .MuiSvgIcon-root': {
      background: `${theme.palette.primary.light}`,
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
   * @returns {Integer} -1 WHEN THE PATH DOES NOT MATCHES THE REQUIRED PATHS OR 0 - topActions.length-1
   */
  function setDefaultNavigation() {
    try {
      topActions.forEach((topActionItem, index) => {
        // IF THE CURRENT PATHNAME IS NOT IN THE TOP ACTIONS ARRAY, THEN RETURN -1
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
      <CustomPaper elevation={3}>
        <Divider />
        <CustomBottomNavigation
          {...props}
          showLabels
          value={bottomNavigationValue}
          onChange={(event, newValue) => setBottomNavigationValue(newValue)}
        >
          {topActions.map((topActionItem) => {
            return (
              <CustomBottomNavigationAction
                component={RedwoodLink}
                to={topActionItem.link}
                key={topActionItem.label}
                label={topActionItem.label}
                icon={topActionItem.selectedIcon}
              />
            )
          })}
        </CustomBottomNavigation>
      </CustomPaper>
    </>
  )
}

export default BottomNavigation
