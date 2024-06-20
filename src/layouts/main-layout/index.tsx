import { Box, Drawer, Toolbar } from '@mui/material';
import { PropsWithChildren, useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { closedMixin, openedMixin } from 'theme/mixins';

export const drawerOpenWidth = 160;
export const drawerCloseWidth = 88;

const MainLayout = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => setOpen(!open);

  return (
    <Box sx={{ display: 'flex' }}>
      <Topbar open={open} handleDrawerToggle={handleDrawerToggle} />
      <Drawer
        variant="permanent"
        open={open}
        sx={(theme) => ({
          width: open ? drawerOpenWidth : drawerCloseWidth,
          ...(open && openedMixin(theme)),
          ...(!open && closedMixin(theme)),
          '& .MuiDrawer-paper': {
            width: open ? drawerOpenWidth : drawerCloseWidth,
            ...(open && openedMixin(theme)),
            ...(!open && closedMixin(theme)),
          },
        })}
      >
        <Sidebar open={open} />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 7.5, pt: 5 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
