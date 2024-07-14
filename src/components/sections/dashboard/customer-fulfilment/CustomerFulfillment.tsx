import { ReactElement, useCallback, useEffect, useRef } from 'react';
import { Box, Button, Divider, Paper, Stack, Typography, alpha, useTheme } from '@mui/material';
import EChartsReactCore from 'echarts-for-react/lib/core';
import CustomerFulfillmentChart from './CustomerFulfillmentChart';
import { currencyFormat } from 'helpers/format-functions';

const customerFulfillmentChartData = {
  'This Month': [765, 795, 960, 495, 495, 660, 615],
  'Last Month': [680, 221, 884, 629, 731, 272, 612],
};

const CustomerFulfillment = (): ReactElement => {
  const theme = useTheme();
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

  const getTotalFulfillment = useCallback(
    (chartData: number[]) => {
      return currencyFormat(chartData.reduce((prev, current) => prev + current, 0));
    },
    [customerFulfillmentChartData],
  );

  return (
    <Paper sx={{ p: 8, height: 1 }}>
      <Typography variant="h4" color="common.white">
        Customer Fulfillment
      </Typography>
      <CustomerFulfillmentChart
        chartRef={chartRef}
        sx={{ height: '220px !important', flexGrow: 1 }}
        data={customerFulfillmentChartData}
      />
      <Stack
        direction="row"
        justifyContent="space-around"
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: alpha(theme.palette.common.white, 0.06), height: 1 }}
          />
        }
        px={2}
        pt={3}
        sx={{
          transitionProperty: 'all',
          transitionDelay: '1s',
        }}
      >
        <Stack gap={1.25} alignItems="center">
          <Button
            variant="text"
            sx={{
              p: 0.5,
              borderRadius: 1,
              fontSize: 'body2.fontSize',
              color: 'text.disabled',
              '&:hover': {
                bgcolor: 'transparent',
              },
              '& .MuiButton-startIcon': {
                mx: 0,
                mr: 1,
              },
            }}
            disableRipple
            startIcon={
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  bgcolor: 'secondary.main',
                  borderRadius: 400,
                }}
              ></Box>
            }
          >
            This Month
          </Button>
          <Typography variant="body2" color="common.white">
            {getTotalFulfillment(customerFulfillmentChartData['This Month'] as number[])}
          </Typography>
        </Stack>
        <Stack gap={1.25} alignItems="center">
          <Button
            variant="text"
            sx={{
              p: 0.5,
              borderRadius: 1,
              fontSize: 'body2.fontSize',
              color: 'text.disabled',
              '&:hover': {
                bgcolor: 'transparent',
              },
              '& .MuiButton-startIcon': {
                mx: 0,
                mr: 1,
              },
            }}
            disableRipple
            startIcon={
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  bgcolor: 'primary.main',
                  borderRadius: 400,
                }}
              ></Box>
            }
          >
            Last Month
          </Button>
          <Typography variant="body2" color="common.white">
            {getTotalFulfillment(customerFulfillmentChartData['Last Month'] as number[])}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default CustomerFulfillment;
