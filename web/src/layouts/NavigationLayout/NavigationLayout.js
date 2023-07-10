// IMPORTING PACKAGES/MODULES
import {
  AccountCircle,
  AccountCircleOutlined,
  Assessment,
  AssessmentOutlined,
  DarkMode,
  Explore,
  ExploreOutlined,
  LightMode,
  Logout,
  LogoutOutlined,
} from '@mui/icons-material'
import { Box, styled, useMediaQuery } from '@mui/material'
import { useRecoilState } from 'recoil'

import { routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import BottomNavigation from 'src/components/BottomNavigation/BottomNavigation'
import PositionedScreen from 'src/components/PositionedScreen/PositionedScreen'
import SideNavigation from 'src/components/SideNavigation/SideNavigation'
import {
  darkModeAtom,
  reportAtom,
  accountAtom,
  regionsAtom,
  userReportsAtom,
} from 'src/contexts/atoms'
import global from 'src/contexts/global'

// CUSTOM COMPONENTS
const CustomBox = styled(Box)(() => ({
  '&.navigation-layout': {
    position: 'relative',
    height: '100%',
  },
}))
const NavigationLayout = ({ children }) => {
  // GETTING AUTH CONTEXT
  const { logOut } = useAuth()

  // GETTING CURRENT PATHNAME
  const { pathname } = window.location

  // GETTING ATOMIC STATES
  const [report, setReport] = useRecoilState(reportAtom)
  const [account, setAccount] = useRecoilState(accountAtom)
  const [regions, setRegions] = useRecoilState(regionsAtom)
  const [isDarkMode, setDarkMode] = useRecoilState(darkModeAtom)
  const [userReports, setUserReports] = useRecoilState(userReportsAtom)

  // SETTING MEDIA QUERY
  const isMobileViewport = useMediaQuery('(min-width:900px)')

  // SETTING TOP ACTIONS
  const topActions = [
    {
      label: 'Generate',
      selectedIcon: <Assessment />,
      unselectedIcon: <AssessmentOutlined />,
      link: routes.generate(),
      isSelected: pathname === routes.generate(),
    },
    {
      label: 'Explore',
      selectedIcon: <Explore />,
      unselectedIcon: <ExploreOutlined />,
      link: routes.explore(),
      isSelected: pathname === routes.explore(),
    },
    {
      label: 'Account',
      selectedIcon: <AccountCircle />,
      unselectedIcon: <AccountCircleOutlined />,
      link: routes.account(),
      isSelected: pathname === routes.account(),
    },
  ]

  // SETTING BOTTOM ACTIONS
  const bottomActions = [
    {
      label: 'Theme',
      selectedIcon: <DarkMode />,
      unselectedIcon: <LightMode />,
      isSelected: isDarkMode,
      onClick: toggleDarkTheme,
    },
    {
      label: 'Logout',
      selectedIcon: <Logout />,
      unselectedIcon: <LogoutOutlined />,
      isSelected: true,
      onClick: setLogout,
    },
  ]

  // METHODS
  /**
   * @name toggleDarkTheme
   * @description METHOD TO TOGGLE DARK THEME
   * @returns {undefined} undefined
   */
  function toggleDarkTheme() {
    window.localStorage.setItem('isDarkMode', `${!isDarkMode}`)
    setDarkMode(!isDarkMode)
  }

  /**
   * @name resetStates
   * @description METHOD TO RESET STATES
   * @returns {undefined} undefined
   */
  function resetStates() {
    setReport(null)
    setAccount(null)
    setRegions(null)
    setUserReports(null)
    setDarkMode(global.isDarkMode)
    window.localStorage.setItem('isDarkMode', `${global.isDarkMode}`)
  }

  /**
   * @name setLogout
   * @description METHOD TO LOG OUT
   * @returns {undefined} undefined
   */
  function setLogout() {
    logOut()
      .then(() => resetStates())
      .catch((error) => console.error(error))
  }

  return (
    <CustomBox className="navigation-layout">
      {!isMobileViewport ? (
        <BottomNavigation topActions={topActions} />
      ) : (
        <SideNavigation
          logoUrl="https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1683873993/tracepath/assets/logo1-cropped_hcmo16.png"
          topActions={topActions}
          bottomActions={bottomActions}
          size="large"
        />
      )}
      <PositionedScreen>{children}</PositionedScreen>
    </CustomBox>
  )
}

export default NavigationLayout
