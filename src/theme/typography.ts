import { TypographyOptions } from '@mui/material/styles/createTypography';
import pxToRem from './functions/px-to-rem';

const typography: TypographyOptions = {
  fontFamily: ['Inter', 'sans-serif'].join(', '),
  h1: {
    fontSize: pxToRem(32),
    fontWeight: 700,
  },
  h2: {
    fontSize: pxToRem(25),
    fontWeight: 700,
  },
  h3: {
    fontSize: pxToRem(20),
    fontWeight: 600,
  },
  h4: {
    fontSize: pxToRem(15),
    fontWeight: 600,
  },
  h5: {
    fontSize: pxToRem(15),
    fontWeight: 500,
  },
  h6: {
    fontSize: pxToRem(13),
    fontWeight: 500,
  },
  subtitle1: {
    fontSize: pxToRem(12),
    fontWeight: 600,
  },
  subtitle2: {
    fontSize: pxToRem(11),
    fontWeight: 500,
  },
  body1: {
    fontSize: pxToRem(10),
    fontWeight: 500,
  },
  body2: {
    fontSize: pxToRem(8),
    fontWeight: 500,
  },
};

export default typography;
