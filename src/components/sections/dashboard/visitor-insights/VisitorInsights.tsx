import { Box, Button, Paper, Stack, Typography, useTheme } from '@mui/material';
import { LineSeriesOption } from 'echarts/charts';
import * as echarts from 'echarts';
import VisitorInsightsChart from './VisitorInsightsChart';
import { ReactElement, useRef, useState } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import {
  GridOption,
  LegendOption,
  TooltipOption,
  XAXisOption,
  YAXisOption,
} from 'echarts/types/dist/shared.js';

const VisitorInsights = (): ReactElement => {
  const theme = useTheme();
  const chartRef = useRef<EChartsReactCore | null>(null);

  const tooltip: TooltipOption = {
    trigger: 'axis',
    axisPointer: {
      type: 'line',
      lineStyle: {
        color: theme.palette.warning.main,
      },
      label: {
        backgroundColor: theme.palette.warning.main,
      },
    },
  };
  const legendData: LegendOption = {
    show: false,
    data: ['New Visitors'],
  };

  const seriesOption: LineSeriesOption[] = [
    {
      id: 1,
      name: 'New Visitors',
      type: 'line',
      stack: 'Total',
      smooth: false,
      color: theme.palette.primary.main,
      lineStyle: {
        width: 2,
        color: theme.palette.primary.main,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 1,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1.1, [
          {
            offset: 1,
            color: '#1D1E26',
          },
          {
            offset: 0.01,
            color: theme.palette.primary.main,
          },
        ]),
      },
      emphasis: {
        focus: 'series',
      },
      data: [210, 115, 440, 370, 320, 500, 270, 450, 381, 245, 212, 333],
    },
  ];

  const xAxis: XAXisOption[] = [
    {
      type: 'category',
      boundaryGap: false,
      data: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        formatter: (value: string) => value.substring(0, 3),
        padding: [1, 20, 1, 10],
        fontSize: theme.typography.body1.fontSize,
        fontWeight: theme.typography.subtitle1.fontWeight as number,
        color: theme.palette.common.white,
      },
    },
  ];
  const yAxis: YAXisOption[] = [
    {
      type: 'value',
      min: 0,
      max: 500,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        fontSize: theme.typography.body1.fontSize,
        fontWeight: theme.typography.subtitle1.fontWeight as number,
        color: theme.palette.common.white,
      },
    },
  ];

  const grid: GridOption = {
    top: '15%',
    right: '1%',
    bottom: '2.5%',
    left: '1%',
    containLabel: true,
  };

  const onChartLegendSelectChanged = (name: string) => {
    if (chartRef.current) {
      const instance = chartRef.current.getEchartsInstance();
      instance.dispatchAction({
        type: 'legendToggleSelect',
        name: name,
      });
    }
  };
  const [visitorToggle, setVisitorToggle] = useState<any>({
    'New Visitors': false,
  });

  const toggleClicked = (name: string) => {
    setVisitorToggle((prevState: any) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <Paper sx={{ p: 3.5 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" color="common.white">
          Visitor Insights
        </Typography>
        {Array.isArray(seriesOption) &&
          seriesOption.map((dataItem) => (
            <Button
              key={dataItem.id}
              variant="text"
              onClick={() => {
                toggleClicked(dataItem.name as string);
                onChartLegendSelectChanged(dataItem.name as string);
              }}
              sx={{
                justifyContent: 'flex-start',
                p: 0.5,
                borderRadius: 1,
                opacity: visitorToggle[`${dataItem.name}`] ? 0.5 : 1,
                '&:hover': {
                  bgcolor: 'transparent',
                },
              }}
              disableRipple
            >
              <Stack direction="row" alignItems="baseline" gap={1} width={1}>
                <Box
                  sx={{
                    width: 5,
                    height: 5,
                    bgcolor: visitorToggle[`${dataItem.name}`]
                      ? 'background.default'
                      : 'warning.main',
                    borderRadius: 400,
                  }}
                ></Box>
                <Typography variant="body1" color="text.disabled" flex={1} textAlign={'left'}>
                  {dataItem.name}
                </Typography>
              </Stack>
            </Button>
          ))}
      </Stack>
      <Box flex={1}>
        <VisitorInsightsChart
          chartRef={chartRef}
          sx={{ height: '200px !important' }}
          seriesData={seriesOption}
          tooltip={tooltip}
          grid={grid}
          legendData={legendData}
          xAxis={xAxis}
          yAxis={yAxis}
        />
      </Box>
    </Paper>
  );
};

export default VisitorInsights;
