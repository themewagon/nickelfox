import { AppBar, IconButton, Stack, TextField, Toolbar } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

const Topbar = ({ open, handleDrawerToggle }: any) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        left: 0,
        ml: open ? 37 : 22,
      }}
    >
      <Toolbar
        sx={{
          bgcolor: 'background.default',
        }}
      >
        <Stack direction="row" gap={2} alignItems="center" width={1} ml={5}>
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
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
