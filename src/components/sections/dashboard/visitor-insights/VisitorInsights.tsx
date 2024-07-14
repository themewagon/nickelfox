import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import VisitorInsightsChart from './VisitorInsightsChart';
import { ReactElement, useEffect, useRef } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';

const visitorInsightsChartData = {
  'New Visitors': [210, 115, 440, 370, 320, 500, 270, 450, 381, 245, 212, 333],
};

const VisitorInsights = (): ReactElement => {
  const chartRef = useRef<EChartsReactCore | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        chartRef.current.getEchartsInstance().resize();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [chartRef]);

  return (
    <Paper sx={{ p: 8, height: 1 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        mb={6}
      >
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
      <VisitorInsightsChart
        chartRef={chartRef}
        data={visitorInsightsChartData}
        sx={{ height: '342px !important', flexGrow: 1 }}
      />
    </Paper>
  );
};

export default VisitorInsights;