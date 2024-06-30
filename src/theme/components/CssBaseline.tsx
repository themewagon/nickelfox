import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import scrollbar from 'theme/styles/scrollbar';
import simplebar from 'theme/styles/simplebar';
import echart from 'theme/styles/echart';
import swiper from 'theme/styles/swiper';

const CssBaseline: Components<Omit<Theme, 'components'>>['MuiCssBaseline'] = {
  defaultProps: {},
  styleOverrides: (theme) => ({
    html: {
      scrollBehavior: 'smooth',
      WebkitOverflowScrolling: 'touch',
      boxSizing: 'border-box',
      scrollbarColor: '#21222D #171821',
    },
    body: {
      ...scrollbar(theme),
    },
    ...simplebar(theme),
    ...swiper(theme),
    ...echart(),
  }),
};

export default CssBaseline;
