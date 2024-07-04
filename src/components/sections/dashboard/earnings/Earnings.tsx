import { Box, Paper, Stack, Typography } from '@mui/material';
import EarningsChart from './EarningsChart';
import { ReactElement, useRef } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';

const Earnings = (): ReactElement => {
  const chartRef = useRef<EChartsReactCore | null>(null);
  return (
    <Paper sx={{ px: 3.5, py: 5, height: 1 }}>
      <Stack gap={1}>
        <Typography variant="h4" color="common.white">
          Earnings
        </Typography>
        <Typography variant="body1" color="text.primary">
          Total Expense
        </Typography>
        <Stack gap={2.25}>
          <Typography variant="h3" color="primary.main">
            $6078.76
          </Typography>
          <Typography variant="subtitle2" color="text.primary">
            Profit is 48% More than last Month
          </Typography>
        </Stack>
      </Stack>
      <Box
        flex={1}
        sx={{
          position: 'relative',
        }}
      >
        <EarningsChart chartRef={chartRef} sx={{ height: '110px !important' }} />
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
