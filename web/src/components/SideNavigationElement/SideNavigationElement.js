// IMPORTING PACKAGES/MODULES
import {
  ListItemButton as MuiListItemButton,
  ListItemIcon,
  styled,
} from '@mui/material'

import { Link as RedwoodLink } from '@redwoodjs/router'

// CUSTOM COMPONENTS
// CUSTOM LIST ITEM BUTTON COMPONENT
const CustomListItemButton = styled(MuiListItemButton)(({ theme }) => ({
  '&.MuiListItemButton-root': {
    borderRadius: '40%',
    minWidth: 'unset',
    margin: '10px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '& .MuiListItemIcon-root': {
    minWidth: 'unset',
  },
  '&.MuiListItemButton-small': {
    width: '30px',
    height: '30px',
  },
  '&.MuiListItemButton-medium': {
    width: '50px',
    height: '50px',
  },
  '&.MuiListItemButton-large': {
    width: '60px',
    height: '60px',
  },
  '&.MuiListItemButton-small .MuiSvgIcon-root': {
    width: '15px',
    height: '15px',
  },
  '&.MuiListItemButton-medium  .MuiSvgIcon-root': {
    width: '30px',
    height: '30px',
  },
  '&.MuiListItemButton-large .MuiSvgIcon-root': {
    width: '35px',
    height: '35px',
  },
  '&.Mui-selected': {
    background: `linear-gradient(to top, ${theme.palette.primary.dark}, ${theme.palette.primary.main}, ${theme.palette.primary.main})`,
  },
  '&.Mui-selected:hover': {
    boxShadow: `0 0 5px ${theme.palette.primary.main}`,
    filter: 'brightness(120%)',
  },
}))

// CUSTOM LIST ITEM BUTTON COMPONENT
const ListItemButton = ({ size, ...props }) => {
  let listItemButtonSizeClass = 'MuiListItemButton-medium'
  if (size === 'small') listItemButtonSizeClass = 'MuiListItemButton-small'
  else if (size === 'large') listItemButtonSizeClass = 'MuiListItemButton-large'
  return (
    <CustomListItemButton
      {...props}
      className={
        props.className
          ? props.className + ' ' + listItemButtonSizeClass
          : listItemButtonSizeClass
      }
    />
  )
}

const SideNavigationElement = ({
  type,
  link,
  size,
  onClick,
  isSelected,
  selectedIcon,
  unselectedIcon,
  ...props
}) => {
  if (type === 'link')
    return (
      <ListItemButton
        component={RedwoodLink}
        to={link}
        selected={isSelected}
        size={size}
        {...props}
      >
        <ListItemIcon>
          {isSelected ? selectedIcon : unselectedIcon}
        </ListItemIcon>
      </ListItemButton>
    )
  else if (type === 'button')
    return (
      <ListItemButton onClick={onClick} size={size} {...props}>
        <ListItemIcon>
          {isSelected ? selectedIcon : unselectedIcon}
        </ListItemIcon>
      </ListItemButton>
    )
  else return <></>
}

export default SideNavigationElement
