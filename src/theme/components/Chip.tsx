import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import hexToRgba from 'theme/functions/hex-to-rgba';

const Chip: Components<Omit<Theme, 'components'>>['MuiChip'] = {
  defaultProps: {
    variant: 'outlined',
    size: 'small',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      paddingTop: theme.spacing(1.25),
      paddingBottom: theme.spacing(1.25),
      borderRadius: theme.shape.borderRadius,
    }),
    sizeSmall: ({ theme }) => ({
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
    }),
    sizeMedium: ({ theme }) => ({
      paddingRight: theme.spacing(2.5),
      paddingLeft: theme.spacing(2.5),
    }),
    label: () => ({
      padding: 0,
    }),
    colorPrimary: ({ theme }) => ({
      color: theme.palette.primary.main,
      backgroundColor: hexToRgba(theme.palette.primary.main, 12),
    }),
    colorSecondary: ({ theme }) => ({
      color: theme.palette.secondary.main,
      backgroundColor: hexToRgba(theme.palette.secondary.main, 12),
    }),
    colorInfo: ({ theme }) => ({
      color: theme.palette.info.main,
      backgroundColor: hexToRgba(theme.palette.info.main, 12),
    }),
    colorSuccess: ({ theme }) => ({
      color: theme.palette.success.main,
      backgroundColor: hexToRgba(theme.palette.success.main, 12),
    }),
    colorWarning: ({ theme }) => ({
      color: theme.palette.warning.main,
      backgroundColor: hexToRgba(theme.palette.warning.main, 12),
    }),
    colorError: ({ theme }) => ({
      color: theme.palette.error.main,
      backgroundColor: hexToRgba(theme.palette.error.main, 12),
    }),
  },
};

export default Chip;
