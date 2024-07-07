import { createTheme, ThemeOptions } from '@mui/material';

import typography from './typography';
import palette from './palette';
import components from './component-overrides';
import shape from './shape';

const theme: ThemeOptions = createTheme({
  typography: typography,
  palette: palette,
  components: components,
  shape: shape,
  spacing: 4,
});

export default theme;
