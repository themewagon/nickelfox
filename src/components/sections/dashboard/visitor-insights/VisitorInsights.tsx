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
    <Paper sx={{ p: 8, height: 1 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap">
        <Typography variant="h4" color="common.white">
          Visitor Insights
        </Typography>
        <Button
          variant="text"
          disableRipple
          startIcon={
            <Box
              sx={{
                width: 5,
                height: 5,
                bgcolor: 'warning.main',
                borderRadius: 400,
              }}
            />
          }
          sx={{
            justifyContent: 'flex-start',
            px: 4,
            py: 2,
            borderRadius: 1,
            alignItems: 'center',
            fontSize: 'body2.fontSize',
            gap: 1,
            color: 'text.disabled',
            bgcolor: 'background.default',
            cursor: 'default',
            '&:hover': {
              bgcolor: 'background.default',
            },
            '& .MuiButton-startIcon': {
              mx: 0,
            },
          }}
        >
          New Visitors
        </Button>
      </Stack>
      <Stack flex={1} justifyContent="flex-end">
        <VisitorInsightsChart
          chartRef={chartRef}
          data={visitorInsightsChartData}
          sx={{ height: '200px !important', flexGrow: 1 }}
        />
      </Stack>
    </Paper>
  );
};

export default VisitorInsights;
