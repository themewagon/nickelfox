import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Avatar: Components<Omit<Theme, 'components'>>['MuiAvatar'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      alignItems: 'center',
      justifyContent: 'center',
      width: 24,
      height: 24,
      fontSize: theme.typography.body1.fontSize,
      fontWeight: theme.typography.body1.fontWeight,
    }),
    img: () => ({}),
  },
};

export default Avatar;
