import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const SnackbarContent: Components<Omit<Theme, 'components'>>['MuiSnackbarContent'] = {
  defaultProps: {},
  styleOverrides: {
    root: () => ({
      flexDirection: 'row',
    }),
    message: ({ theme }) => ({
      fontSize: theme.typography.subtitle1.fontSize,
    }),
  },
};

export default SnackbarContent;
