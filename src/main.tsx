import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from 'theme/theme.ts';
import BreakpointsProvider from 'providers/BreakpointsProvider.tsx';
import { RouterProvider } from 'react-router-dom';
import router from 'routes/router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BreakpointsProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </BreakpointsProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
