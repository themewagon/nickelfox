import { ReactElement, useCallback, useRef } from 'react';
import { Box, Button, Divider, Paper, Stack, Typography, alpha, useTheme } from '@mui/material';
import EChartsReactCore from 'echarts-for-react/lib/core';
import CustomerFulfillmentChart from './CustomerFulfillmentChart';
import { currencyFormat } from 'helpers/format-functions';

const customerFulfillmentChartData = {
  'This Month': [765, 795, 960, 495, 495, 660, 615, 930],
  'Last Month': [680, 221, 884, 629, 731, 272, 612, 660],
};

const CustomerFulfillment = (): ReactElement => {
  const theme = useTheme();
  const chartRef = useRef<EChartsReactCore | null>(null);

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
      <Stack
        flex={1}
        pt={5.5}
        borderBottom={1}
        justifyContent="flex-end"
        sx={{
          borderBottomColor: alpha(theme.palette.common.white, 0.06),
        }}
      >
        <CustomerFulfillmentChart
          chartRef={chartRef}
          sx={{ height: '220px !important', flexGrow: 1 }}
          data={customerFulfillmentChartData}
        />
      </Stack>
      <Stack
        direction="row"
        justifyContent={{ xs: 'space-around', md: 'space-between', lg: 'space-around' }}
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: alpha(theme.palette.common.white, 0.06), height: 34 }}
          />
        }
        px={2}
        pt={3}
        sx={{
          transitionProperty: 'all',
          transitionDelay: '1s',
        }}
      >
        <Button
          variant="text"
          sx={{
            flexDirection: 'column',
            p: 0.5,
            borderRadius: 1,
            '&:hover': {
              bgcolor: 'transparent',
            },
          }}
          disableRipple
        >
          <Stack direction="row" alignItems="baseline" gap={1} width={1}>
            <Box
              sx={{
                width: 8,
                height: 8,
                bgcolor: 'secondary.main',
                borderRadius: 400,
              }}
            ></Box>
            <Typography variant="body1" color="text.disabled" flex={1} textAlign={'left'}>
              This Month
            </Typography>
          </Stack>
          <Typography variant="body1" color="common.white">
            {getTotalFulfillment(customerFulfillmentChartData['This Month'] as number[])}
          </Typography>
        </Button>
        <Button
          variant="text"
          sx={{
            flexDirection: 'column',
            p: 0.5,
            borderRadius: 1,
            '&:hover': {
              bgcolor: 'transparent',
            },
          }}
          disableRipple
        >
          <Stack direction="row" alignItems="baseline" gap={1} width={1}>
            <Box
              sx={{
                width: 8,
                height: 8,
                bgcolor: 'primary.main',
                borderRadius: 400,
              }}
            ></Box>
            <Typography variant="body1" color="text.disabled" flex={1} textAlign={'left'}>
              Last Month
            </Typography>
          </Stack>
          <Typography variant="body1" color="common.white">
            {getTotalFulfillment(customerFulfillmentChartData['Last Month'] as number[])}
          </Typography>
        </Button>
      </Stack>
    </Paper>
  );
};

export default CustomerFulfillment;
