import { useCallback, useRef, useState } from 'react';
import { Box, Button, Divider, Paper, Stack, Typography, alpha, useTheme } from '@mui/material';
import * as echarts from 'echarts';
import { LineSeriesOption } from 'echarts';
import EChartsReactCore from 'echarts-for-react/lib/core';
import CustomerFulfillmentChart from './CustomerFulfillmentChart';
import { currencyFormat } from 'helpers/format-functions';

const CustomerFulfillment = () => {
  const theme = useTheme();
  const chartRef = useRef<EChartsReactCore | null>(null);

  const areaChartColors = [theme.palette.secondary.main, theme.palette.primary.main];

  const legendData = ['This Month', 'Last Month'];

  const seriesOption: LineSeriesOption[] = [
    {
      id: 1,
      name: 'This Month',
      type: 'line',
      stack: 'Total',
      lineStyle: {
        width: 2,
      },
      showSymbol: true,
      symbol: 'circle',
      symbolSize: 5,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 1,
            color: '#1D1E26',
          },
          {
            offset: 0,
            color: areaChartColors[0],
          },
        ]),
      },
      emphasis: {
        focus: 'series',
      },
      data: [765, 795, 960, 495, 495, 660, 615, 930],
    },
    {
      id: 2,
      name: 'Last Month',
      type: 'line',
      stack: 'Total',
      lineStyle: {
        width: 2,
      },
      showSymbol: true,
      symbol: 'circle',
      symbolSize: 5,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 1,
            color: '#1D1E26',
          },
          {
            offset: 0,
            color: areaChartColors[1],
          },
        ]),
      },
      emphasis: {
        focus: 'series',
      },
      data: [680, 221, 884, 629, 731, 272, 612],
    },
  ];

  const onChartLegendSelectChanged = (name: string) => {
    if (chartRef.current) {
      const instance = chartRef.current.getEchartsInstance();
      instance.dispatchAction({
        type: 'legendToggleSelect',
        name: name,
      });
    }
  };

  const [month, setMonth] = useState<any>({
    'This Month': false,
    'Last Month': false,
  });

  const toggleClicked = (name: string) => {
    setMonth((prevState: any) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const getTotalFulfillment = useCallback((seriesData: number[]) => {
    return currencyFormat(seriesData.reduce((prev, current) => prev + current, 0));
  }, []);

  return (
    <Paper sx={{ p: 3.5, height: 1 }}>
      <Typography variant="h4" color="common.white">
        Customer Fulfillment
      </Typography>
      <Box
        flex={1}
        pt={5.5}
        borderBottom={1}
        sx={{
          borderBottomColor: alpha(theme.palette.common.white, 0.06),
        }}
      >
        <CustomerFulfillmentChart
          chartRef={chartRef}
          sx={{ height: '115px !important' }}
          seriesData={seriesOption}
          legendData={legendData}
          colors={areaChartColors}
        />
      </Box>
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
        {Array.isArray(seriesOption) &&
          seriesOption.map((dataItem, index) => (
            <Button
              key={dataItem.id}
              variant="text"
              onClick={() => {
                toggleClicked(dataItem.name as string);
                onChartLegendSelectChanged(dataItem.name as string);
              }}
              sx={{
                flexDirection: 'column',
                p: 0.5,
                borderRadius: 1,
                opacity: month[`${dataItem.name}`] ? 0.5 : 1,
              }}
              disableRipple
            >
              <Stack direction="row" alignItems="baseline" gap={1} width={1}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    bgcolor: month[`${dataItem.name}`]
                      ? 'background.default'
                      : areaChartColors[index],
                    borderRadius: 400,
                  }}
                ></Box>
                <Typography variant="body1" color="text.disabled" flex={1} textAlign={'left'}>
                  {dataItem.name}
                </Typography>
              </Stack>
              <Typography variant="body1" color="common.white">
                {getTotalFulfillment(dataItem.data as number[])}
              </Typography>
            </Button>
          ))}
      </Stack>
    </Paper>
  );
};

export default CustomerFulfillment;
