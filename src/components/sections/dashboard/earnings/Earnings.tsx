import { Box, Paper, Typography } from '@mui/material';
import EarningsChart from './EarningsChart';
import { ReactElement, useRef } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';

const Earnings = (): ReactElement => {
  const chartRef = useRef<EChartsReactCore | null>(null);
  return (
    <Paper sx={{ p: 8, height: 1 }}>
      <Typography variant="h4" color="common.white" mb={2.5}>
        Earnings
      </Typography>
      <Typography variant="body1" color="text.primary" mb={4.5}>
        Total Expense
      </Typography>
      <Typography variant="h1" color="primary.main" mb={4.5}>
        $6078.76
      </Typography>
      <Typography variant="body1" color="text.primary" mb={15}>
        Profit is 48% More than last Month
      </Typography>
      <Box
        flex={1}
        sx={{
          position: 'relative',
        }}
      >
        <EarningsChart chartRef={chartRef} sx={{ height: '163px !important' }} />
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
