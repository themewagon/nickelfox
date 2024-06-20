import { ReactNode, forwardRef } from 'react';
import { StyledRootScrollbar, StyledScrollbar } from './styles';
import { SxProps } from '@mui/material';

interface ScrollbarProps {
  children: ReactNode;
  sx?: SxProps;
}

const Scrollbar = forwardRef(({ children, sx, ...other }: ScrollbarProps, ref) => {
  return (
    <StyledRootScrollbar>
      <StyledScrollbar
        scrollableNodeProps={{
          ref,
        }}
        clickOnTrack={false}
        sx={sx}
        {...other}
      >
        {children}
      </StyledScrollbar>
    </StyledRootScrollbar>
  );
});

export default Scrollbar;
