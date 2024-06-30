import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import ReactSwiper from 'components/base/ReactSwiper';
import { Fragment, ReactElement, useCallback, useMemo, useState } from 'react';
// import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
const TrendingNow = (): ReactElement => {
  //   const swiperRef = useRef<SwiperType>(null);

  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const theSlides = useMemo(() => ['slide one', 'slide two', 'slide three', 'slide four'], []);

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    // <Paper sx={{ p: 3.5 }}>
    //   <Stack direction="row" justifyContent="space-between" alignItems="center">
    //     <Typography variant="h4" color="common.white">
    //       Trending Now
    //     </Typography>
    //     <Stack direction="row" gap={2}>
    //       <Button
    //         variant="text"
    //         className="swiper-button-prev"
    //         sx={{
    //           position: 'static',
    //           ':hover': {
    //             bgcolor: 'transparent',
    //           },
    //         }}
    //         centerRipple
    //       />
    //       <Button
    //         variant="text"
    //         className="swiper-button-next"
    //         sx={{
    //           position: 'static',
    //           ':hover': {
    //             bgcolor: 'transparent',
    //           },
    //         }}
    //         centerRipple
    //       />
    //     </Stack>
    //   </Stack>
    //   <ReactSwiper>
    //     <Fragment>
    //       <SwiperSlide>
    //         <Box height={200}>Slide 1</Box>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <Box height={200}>Slide 2</Box>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <Box height={200}>Slide 3</Box>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <Box height={200}>Slide 4</Box>
    //       </SwiperSlide>
    //     </Fragment>
    //   </ReactSwiper>
    // </Paper>
    <div>
      <div>
        <button onClick={handlePrevious}>previous</button>
      </div>
      <ReactSwiper onSwiper={setSwiperRef}>
        {theSlides.map((slide) => (
          <SwiperSlide key={slide}>{slide}</SwiperSlide>
        ))}
      </ReactSwiper>
      <div>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default TrendingNow;
