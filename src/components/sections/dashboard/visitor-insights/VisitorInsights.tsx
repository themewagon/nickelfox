import { Box, Button, Paper, Stack, Typography, useTheme } from '@mui/material';
import { LineSeriesOption } from 'echarts/charts';
import * as echarts from 'echarts';
import VisitorInsightsChart from './VisitorInsightsChart';
import { useRef, useState } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';

const VisitorInsights = () => {
  const theme = useTheme();
  const chartRef = useRef<EChartsReactCore | null>(null);
  const lineChartColors = [theme.palette.primary.main];

  const legendData = ['New Visitors'];

  const seriesOption: LineSeriesOption[] = [
    {
      id: 1,
      name: 'New Visitors',
      type: 'line',
      stack: 'Total',
      smooth: false,
      lineStyle: {
        width: 2,
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
            color: lineChartColors[0],
          },
        ]),
      },
      emphasis: {
        focus: 'series',
      },
      data: [100, 30, 440, 370, 320, 500, 270, 450, 381, 245, 212, 333],
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
                      : theme.palette.warning.main,
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
          legendData={legendData}
          colors={lineChartColors}
        />
      </Box>
    </Paper>
  );
};

export default VisitorInsights;
