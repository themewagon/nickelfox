import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Avatar: Components<Omit<Theme, 'components'>>['MuiAvatar'] = {
  defaultProps: {},
  styleOverrides: {
    root: () => ({
      alignItems: 'center',
      justifyContent: 'center',
    }),
    img: () => ({}),
  },
};

export default Avatar;
