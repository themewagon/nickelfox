import { Box, Paper, Stack, Typography, useTheme } from '@mui/material';
import EarningsChart from './EarningsChart';
import { ReactElement, useRef } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { GaugeSeriesOption } from 'echarts/charts';

const Earnings = (): ReactElement => {
  const theme = useTheme();
  const chartRef = useRef<EChartsReactCore | null>(null);

  const seriesOption: GaugeSeriesOption[] = [
    {
      type: 'gauge',
      startAngle: 180,
      endAngle: 0,
      min: 0,
      max: 100,
      radius: '150%',
      center: ['50%', '100%'],
      splitNumber: 10,
      itemStyle: {
        color: theme.palette.primary.main,
        borderWidth: 0,
      },
      progress: {
        show: true,
        roundCap: false,
        width: 22,
      },
      pointer: {
        icon: 'roundRect',
        length: '60%',
        width: 5,
        offsetCenter: [0, -48],
        itemStyle: {
          borderWidth: 20,
        },
      },
      axisLine: {
        roundCap: false,
        lineStyle: {
          width: 22,
          color: [[1, theme.palette.grey[900]]],
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      title: {
        show: false,
      },
      detail: {
        show: false,
      },
      data: [
        {
          value: 80,
        },
      ],
    },
  ];

  return (
    <Paper sx={{ px: 3.5, py: 5, height: 1 }}>
      <Stack gap={1}>
        <Typography variant="h4" color="common.white">
          Earnings
        </Typography>
        <Typography variant="h6" color="text.primary">
          Total Expense
        </Typography>
        <Stack gap={2.25}>
          <Typography variant="h3" color="primary.main">
            $6078.76
          </Typography>
          <Typography variant="subtitle2" color="text.primary">
            Total Expense
          </Typography>
        </Stack>
      </Stack>
      <Box
        flex={1}
        sx={{
          position: 'relative',
        }}
      >
        <EarningsChart
          chartRef={chartRef}
          seriesData={seriesOption}
          sx={{ height: '110px !important' }}
        />
        <Typography
          variant="h1"
          color="common.white"
          textAlign="center"
          mx="auto"
          position="absolute"
          left={0}
          right={0}
          bottom={0}
        >
          80%
        </Typography>
      </Box>
    </Paper>
  );
};

export default Earnings;
