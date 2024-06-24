import {
  AppBar,
  Avatar,
  Badge,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Toolbar,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import profile from 'assets/account/Profile.png';
import { drawerCloseWidth, drawerOpenWidth } from '.';
// import { bgBlur } from 'theme/functions/bgBlur';

const Topbar = ({ open, handleDrawerToggle }: any) => {
  return (
    <AppBar
      position="fixed"
      sx={(theme) => ({
        zIndex: theme.zIndex.drawer + 1,
        left: 0,
        ml: open ? 40 : 22,
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
        }}
      >
        <Stack direction="row" gap={2} alignItems="center" ml={5} flex="1 1 51%">
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
          <TextField
            variant="filled"
            fullWidth
            placeholder="Search here..."
            sx={{
              maxWidth: 504,
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
          mr={5}
          flex="1 1 20%"
        >
          <Badge
            color="error"
            badgeContent=" "
            variant="dot"
            sx={{
              '& .MuiBadge-badge': {
                top: 5,
                right: 5,
              },
            }}
          >
            <IconButton
              sx={{
                padding: 1,
              }}
            >
              <IconifyIcon icon="ph:bell-bold" width={15} height={17} />
            </IconButton>
          </Badge>
          <Avatar src={profile} sx={{ width: 29, height: 29 }} />
          <IconButton
            sx={{
              padding: 1,
            }}
          >
            <IconifyIcon icon="mingcute:down-fill" width={15} height={15} />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
