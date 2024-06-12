import { createTheme } from '@mui/material';
import typography from './typography';
import palette from './palette';
import Paper from './components/Paper';
import Chip from './components/Chip';
import Stack from './components/Stack';
import Grid2 from './components/Grid2';

const theme = createTheme({
  typography: typography,
  palette: palette,
  components: {
    MuiGrid2: Grid2,
    MuiPaper: Paper,
    MuiStack: Stack,
    MuiChip: Chip,
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 4,
});

export default theme;
