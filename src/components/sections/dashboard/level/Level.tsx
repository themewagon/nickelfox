import { Box, Button, Divider, Paper, Stack, Typography, alpha, useTheme } from '@mui/material';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { ReactElement, useRef } from 'react';
import LevelChart from './LevelChart';

const levelChartData = {
  Service: [43, 52, 51, 57, 29, 22],
  Volume: [44, 55, 36, 22, 32, 44],
};

const Level = (): ReactElement => {
  const theme = useTheme();
  const chartRef = useRef<EChartsReactCore | null>(null);

  return (
    <Paper sx={{ p: 3.5, minHeight: 201, height: 1 }}>
      <Typography variant="h4" color="common.white">
        Level
      </Typography>
      <Box
        flex={1}
        pt={5.5}
        borderBottom={1}
        sx={{
          borderBottomColor: alpha(theme.palette.common.white, 0.06),
        }}
      >
        <LevelChart chartRef={chartRef} data={levelChartData} sx={{ height: '115px !important' }} />
      </Box>
      <Stack
        direction="row"
        justifyContent={{
          xs: 'space-evenly',
          sm: 'space-around',
          md: 'space-between',
          lg: 'space-around',
        }}
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: alpha(theme.palette.common.white, 0.06), height: 19 }}
          />
        }
        px={2}
        pt={3}
      >
        <Button
          variant="text"
          sx={{
            justifyContent: 'flex-start',
            p: 0.5,
            borderRadius: 1,
            gap: 1,
            alignItems: 'baseline',
            '&:hover': {
              bgcolor: 'transparent',
            },
          }}
          disableRipple
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              bgcolor: 'grey.900',
              borderRadius: 400,
            }}
          ></Box>
          <Typography variant="body1" color="text.disabled" flex={1} textAlign={'left'}>
            Service
          </Typography>
        </Button>
        <Button
          variant="text"
          sx={{
            justifyContent: 'flex-start',
            p: 0.5,
            borderRadius: 1,
            gap: 1,
            alignItems: 'baseline',
            '&:hover': {
              bgcolor: 'transparent',
            },
          }}
          disableRipple
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              bgcolor: 'primary.main',
              borderRadius: 400,
            }}
          ></Box>
          <Typography variant="body1" color="text.disabled" flex={1} textAlign={'left'}>
            Volume
          </Typography>
        </Button>
      </Stack>
    </Paper>
  );
};

export default Level;
