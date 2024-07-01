import { Box, Button, IconButton, Paper, Stack, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
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
    console.log(swiperRef);
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    console.log(swiperRef);
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
    <Paper
      sx={{
        p: 3.5,
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" color="common.white">
          Trending Now
        </Typography>
        <Stack direction="row" gap={1}>
          <IconButton
            className={`prev-arrow`}
            sx={{
              '&:disabled': {
                opacity: 0.5,
                cursor: 'default',
              },
              '&:hover': {
                bgcolor: 'transparent',
              },
            }}
            centerRipple
          >
            <IconifyIcon icon="mingcute:left-line" />
          </IconButton>
          <IconButton
            className={`next-arrow`}
            sx={{
              '&:disabled': {
                opacity: 0.5,
                cursor: 'default',
              },
              '&:hover': {
                bgcolor: 'transparent',
              },
            }}
            centerRipple
          >
            <IconifyIcon icon="mingcute:right-line" />
          </IconButton>
        </Stack>
      </Stack>
      <ReactSwiper onSwiper={setSwiperRef}>
        {theSlides.map((slide) => (
          <SwiperSlide key={slide}>{slide}</SwiperSlide>
        ))}
      </ReactSwiper>
    </Paper>
  );
};

export default TrendingNow;
