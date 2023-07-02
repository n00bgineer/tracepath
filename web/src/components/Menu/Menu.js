// IMPORTING PACKAGES/MODULES
import {
  styled,
  Menu as MuiMenu,
  Paper,
  MenuItem as MuiMenuItem,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText,
} from '@mui/material'

// CUSTOM COMPONENTS
// CUSTOM MENU COMPONENT
const CustomMenu = styled(MuiMenu)(() => ({
  '& .MuiList-root': {
    padding: '5px',
  },
  '& .MuiMenu-paper': {
    borderRadius: '25px',
  },
}))
// CUSTOM MENU ITEM COMPONENT
const CustomMenuItem = styled(MuiMenuItem)(() => ({
  '&.MuiMenuItem-root': {
    borderRadius: '20px',
    padding: '5px 10px',
    display: 'flex',
  },
}))
// CUSTOM LIST ITEM COMPONENT
const CustomListItemIcon = styled(MuiListItemIcon)(() => ({
  '& .MuiSvgIcon-root': {
    height: '20px',
    width: '20px',
  },
}))
// CUSTOM LIST ITEM TEXT COMPONENT
const CustomListItemText = styled(MuiListItemText)(() => ({
  '&.MuiListItemText-root': {
    flexGrow: 1,
    textAlign: 'left',
  },
}))

const Menu = ({ anchorEl, open, onClose, menuItems, ...props }) => {
  return (
    <Paper>
      <CustomMenu
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        {...props}
        className={(props.className ? props.className : '') + ' menu'}
      >
        {menuItems &&
          menuItems.map((menuItem, index) => {
            return (
              <CustomMenuItem onClick={menuItem.onClick} key={index}>
                {menuItem.icon && (
                  <CustomListItemIcon>{menuItem.icon}</CustomListItemIcon>
                )}
                {menuItem.label && (
                  <CustomListItemText>{menuItem.label}</CustomListItemText>
                )}
              </CustomMenuItem>
            )
          })}
      </CustomMenu>
    </Paper>
  )
}

export default Menu
