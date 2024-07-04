import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import VisitorInsightsChart from './VisitorInsightsChart';
import { ReactElement, useRef } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';

const visitorInsightsChartData = {
  'New Visitors': [210, 115, 440, 370, 320, 500, 270, 450, 381, 245, 212, 333],
};

const VisitorInsights = (): ReactElement => {
  const chartRef = useRef<EChartsReactCore | null>(null);

  return (
    <Paper sx={{ p: 3.5 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap">
        <Typography variant="h4" color="common.white">
          Visitor Insights
        </Typography>
        <Button
          variant="text"
          sx={{
            justifyContent: 'flex-start',
            px: 1.75,
            py: 1.25,
            borderRadius: 1,
            alignItems: 'center',
            gap: 1,
            bgcolor: 'background.default',
            '&:hover': {
              bgcolor: 'background.default',
            },
          }}
        >
          <Box
            sx={{
              width: 5,
              height: 5,
              bgcolor: 'warning.main',
              borderRadius: 400,
            }}
          ></Box>
          <Typography variant="body1" color="text.disabled" flex={1} textAlign={'left'}>
            New Visitors
          </Typography>
        </Button>
      </Stack>
      <Box flex={1}>
        <VisitorInsightsChart
          chartRef={chartRef}
          data={visitorInsightsChartData}
          sx={{ height: '200px !important' }}
        />
      </Box>
    </Paper>
  );
};

export default VisitorInsights;
