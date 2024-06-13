import { Box, Drawer, Toolbar } from '@mui/material';
import { PropsWithChildren, useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const MainLayout = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => setOpen(!open);

  return (
    <Box sx={{ display: 'flex' }}>
      <Topbar open={open} handleDrawerToggle={handleDrawerToggle} />
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open ? 148 : 88,
          '& .MuiDrawer-paper': {
            width: open ? 148 : 88,
          },
        }}
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
