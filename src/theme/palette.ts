import { PaletteOptions } from '@mui/material';
import { bluishCyan, fuchsia, green, grey, pinkishRed, stone, teal, yellowOrange } from './colors';

const palette: PaletteOptions = {
  primary: {
    light: teal[50],
    main: teal[100],
  },
  secondary: {
    light: fuchsia[50],
    main: fuchsia[100],
  },
  success: {
    main: green[600],
  },
  info: {
    main: bluishCyan[500],
  },
  warning: {
    main: yellowOrange[300],
  },
  error: {
    main: pinkishRed[600],
  },
  background: {
    default: stone[900],
    paper: grey[900],
  },
  text: {
    primary: stone[600],
    secondary: stone[200],
    disabled: stone[500],
  },
  divider: stone[700],
  action: {
    focus: stone[400],
    disabled: stone[300],
  },
  grey: {
    '300': '#D9D9D9',
    '900': '#2B2B36',
    A400: '#1D1E26',
  },
};

export default palette;
