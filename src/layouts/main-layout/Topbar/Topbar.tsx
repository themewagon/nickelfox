import {
  Badge,
  Stack,
  AppBar,
  Toolbar,
  TextField,
  IconButton,
  InputAdornment,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { ReactElement } from 'react';
import { drawerCloseWidth, drawerOpenWidth } from '..';
import UserDropdown from './UserDropdown';

const Topbar = ({
  open,
  handleDrawerToggle,
}: {
  open: boolean;
  handleDrawerToggle: () => void;
}): ReactElement => {
  return (
    <AppBar
      position="fixed"
      sx={(theme) => ({
        zIndex: theme.zIndex.drawer + 1,
        left: 0,
        ml: open ? 65 : 33.5,
        width: open ? `calc(100% - ${drawerOpenWidth}px)` : `calc(100% - ${drawerCloseWidth}px)`,
        transition: open
          ? theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            })
          : theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
      })}
    >
      <Toolbar
        component={Stack}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          bgcolor: 'background.default',
          height: 116,
        }}
      >
        <Stack direction="row" gap={2} alignItems="center" ml={2.5} flex="1 1 52.5%">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
          >
            <IconifyIcon
              icon={open ? 'ri:menu-unfold-4-line' : 'ri:menu-unfold-3-line'}
              color="common.white"
            />
          </IconButton>
          <IconButton
            color="inherit"
            sx={{
              display: { xs: 'flex', sm: 'none' },
            }}
          >
            <IconifyIcon icon="mdi:search" />
          </IconButton>
          <TextField
            variant="filled"
            fullWidth
            placeholder="Search here..."
            sx={{
              // maxWidth: 504,
              display: { xs: 'none', sm: 'flex' },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <IconifyIcon icon="akar-icons:search" width={13} height={13} />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack
          direction="row"
          gap={3.75}
          alignItems="center"
          justifyContent="flex-end"
          mr={3.75}
          flex="1 1 20%"
        >
          <Badge
            color="error"
            badgeContent=" "
            variant="dot"
            sx={{
              '& .MuiBadge-badge': {
                top: 11,
                right: 11,
              },
            }}
          >
            <IconButton
              sx={{
                padding: 1,
              }}
            >
              <IconifyIcon icon="ph:bell-bold" width={29} height={32} />
            </IconButton>
          </Badge>
          <UserDropdown />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
