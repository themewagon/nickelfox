import { TypographyOptions } from '@mui/material/styles/createTypography';
import pxToRem from './functions/px-to-rem';

const typography: TypographyOptions = {
  fontFamily: ['Inter', 'sans-serif'].join(', '),
  h1: {
    fontSize: pxToRem(50),
    fontWeight: 700,
  },
  h2: {
    fontSize: pxToRem(38),
    fontWeight: 700,
  },
  h3: {
    fontSize: pxToRem(31),
    fontWeight: 600,
  },
  h4: {
    fontSize: pxToRem(23),
    fontWeight: 600,
  },
  h5: {
    fontSize: pxToRem(18),
    fontWeight: 600,
  },
  h6: {
    fontSize: pxToRem(18),
    fontWeight: 500,
  },
  subtitle1: {
    fontSize: pxToRem(17),
    fontWeight: 600,
  },
  subtitle2: {
    fontSize: pxToRem(17),
    fontWeight: 500,
  },
  body1: {
    fontSize: pxToRem(15),
    fontWeight: 500,
  },
  body2: {
    fontSize: pxToRem(12),
    fontWeight: 500,
  },
};

export default typography;
