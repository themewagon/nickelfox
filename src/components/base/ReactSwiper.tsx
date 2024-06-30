import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { Box } from '@mui/material';
import { RefObject } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { useBreakpoints } from 'providers/BreakpointsProvider';

const ReactSwiper = ({
  children,
  swiperRef,
  ...rest
}: {
  children: any;
  swiperRef?: RefObject<any>;
  rest?: any;
}) => {
  const { up } = useBreakpoints();
  return (
    <Box
      component={Swiper}
      ref={swiperRef}
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={up('sm') ? 2 : 1}
      width={1}
      onInit={(swiper) => {
        swiper.navigation.init();
        swiper.navigation.update();
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      onSwiper={(swiper: SwiperType) => console.log(swiper)}
      onSlideChange={() => console.log('Slide changed')}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default ReactSwiper;
