import { Avatar, Button, Divider, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import profile from 'assets/account/Profile.png';
import { ReactElement, SetStateAction, useCallback, useState } from 'react';

const UserDropdown = (): ReactElement => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  // let angle = 0;
  const handleClick = useCallback(
    (event: { currentTarget: SetStateAction<HTMLElement | null> }) => {
      setAnchorEl(event.currentTarget);
    },
    [],
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      <Button
        color="inherit"
        variant="text"
        id="account-dropdown-menu"
        aria-controls={menuOpen ? 'account-dropdown-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={menuOpen ? 'true' : undefined}
        onClick={handleClick}
        disableRipple
        sx={{
          borderRadius: 2,
          gap: 3.75,
          px: { xs: 0, sm: 0.625 },
          py: 0.625,
        }}
      >
        <Avatar src={profile} sx={{ width: 29, height: 29 }} />
        <IconifyIcon
          color="common.white"
          icon="mingcute:down-fill"
          width={15}
          height={15}
          sx={(theme) => ({
            transform: menuOpen ? `rotate(180deg)` : `rotate(0deg)`,
            transition: theme.transitions.create('all', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.short,
            }),
          })}
        />
      </Button>
      <Menu
        id="account-dropdown-menu"
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'account-dropdown-button',
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon
            sx={{
              minWidth: `0 !important`,
              color: 'text.primary',
              width: 14,
              height: 10,
            }}
          >
            <IconifyIcon icon="ion:home-sharp" />
          </ListItemIcon>
          <ListItemText
            sx={(theme) => ({
              '& .MuiListItemText-primary': {
                fontSize: theme.typography.subtitle2.fontSize,
                fontFamily: theme.typography.subtitle2.fontFamily,
                fontWeight: theme.typography.subtitle2.fontWeight,
              },
            })}
          >
            Home
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon
            sx={{
              minWidth: `0 !important`,
              color: 'text.primary',
              width: 14,
              height: 10,
            }}
          >
            <IconifyIcon icon="mdi:account-outline" />
          </ListItemIcon>
          <ListItemText
            sx={(theme) => ({
              '& .MuiListItemText-primary': {
                fontSize: theme.typography.subtitle2.fontSize,
                fontFamily: theme.typography.subtitle2.fontFamily,
                fontWeight: theme.typography.subtitle2.fontWeight,
              },
            })}
          >
            Profile
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon
            sx={{
              minWidth: `0 !important`,
              color: 'text.primary',
              width: 14,
              height: 10,
            }}
          >
            <IconifyIcon icon="material-symbols:settings" />
          </ListItemIcon>
          <ListItemText
            sx={(theme) => ({
              '& .MuiListItemText-primary': {
                fontSize: theme.typography.subtitle2.fontSize,
                fontFamily: theme.typography.subtitle2.fontFamily,
                fontWeight: theme.typography.subtitle2.fontWeight,
              },
            })}
          >
            Settings
          </ListItemText>
        </MenuItem>
        <Divider
          sx={{
            my: 0,
          }}
        />
        <MenuItem onClick={handleClose}>
          <ListItemIcon
            sx={{
              minWidth: `0 !important`,
              color: 'error.main',
              width: 14,
              height: 10,
            }}
          >
            <IconifyIcon icon="ri:logout-circle-line" color="error.main" />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: 'error.main',
              '& .MuiListItemText-primary': {
                fontSize: 'subtitle2.fontSize',
                fontWeight: 'subtitle2.fontWeight',
              },
            }}
          >
            Logout
          </ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserDropdown;
