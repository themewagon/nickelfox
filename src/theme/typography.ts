import { TypographyOptions } from '@mui/material/styles/createTypography';
import pxToRem from './functions/px-to-rem';

const typography: TypographyOptions = {
  fontFamily: ['Inter', 'sans-serif'].join(', '),
  h1: {
    fontSize: pxToRem(32), // 2rem
    fontWeight: 700,
  },
  h2: {
    fontSize: pxToRem(25), // 1.5625rem
    fontWeight: 700,
  },
  h3: {
    fontSize: pxToRem(20), // 1.25rem
    fontWeight: 600,
  },
  h4: {
    fontSize: pxToRem(15), // 0.9375rem
    fontWeight: 600,
  },
  h5: {
    fontSize: pxToRem(14), // 0.875rem
    fontWeight: 500,
  },
  h6: {
    fontSize: pxToRem(13), // 0.8125rem
    fontWeight: 500,
  },
  subtitle1: {
    fontSize: pxToRem(12), // 0.75rem
    fontWeight: 600,
  },
  subtitle2: {
    fontSize: pxToRem(11), // 0.6875rem
    fontWeight: 500,
  },
  body1: {
    fontSize: pxToRem(10), // 0.625rem
    fontWeight: 500,
  },
  body2: {
    fontSize: pxToRem(8), // 0.5rem
    fontWeight: 500,
  },
};

export default typography;
