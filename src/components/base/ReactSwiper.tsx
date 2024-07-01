import { Swiper, SwiperClass } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { Box } from '@mui/material';
import { RefObject } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { useBreakpoints } from 'providers/BreakpointsProvider';

const ReactSwiper = ({
  children,
  swiperRef,
  onSwiper,
  ...rest
}: {
  children: any;
  swiperRef?: RefObject<any>;
  onSwiper: React.Dispatch<React.SetStateAction<SwiperClass | undefined>>;
  rest?: any;
}) => {
  const { up } = useBreakpoints();
  return (
    <Box
      component={Swiper}
      ref={swiperRef}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={up('sm') ? 2 : 1}
      width={1}
      onInit={(swiper) => {
        swiper.navigation.init();
        swiper.navigation.update();
      }}
      navigation={{
        prevEl: '.prev-arrow',
        nextEl: '.next-arrow',
      }}
      onSwiper={onSwiper}
      // onSlideChange={() => console.log('Slide changed')}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default ReactSwiper;
