import { SxProps } from '@mui/material';
import ReactEChart from 'components/base/ReactEChart';
import * as echarts from 'echarts';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { LineSeriesOption } from 'echarts/charts';
import {
  GridComponentOption,
  LegendComponentOption,
  TooltipComponentOption,
} from 'echarts/components';
import { ReactElement, useMemo } from 'react';

type VisitorInsightsChartProps = {
  chartRef: React.MutableRefObject<EChartsReactCore | null>;
  seriesData?: LineSeriesOption[];
  legendData?: any;
  colors?: string[];
  sx?: SxProps;
};

type VisitorInsightsChartOptions = echarts.ComposeOption<
  LineSeriesOption | LegendComponentOption | TooltipComponentOption | GridComponentOption
>;

const VisitorInsightsChart = ({
  chartRef,
  seriesData,
  legendData,
  colors,
  ...rest
}: VisitorInsightsChartProps): ReactElement => {
  const option: VisitorInsightsChartOptions = useMemo(
    () => ({
      color: colors,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          lineStyle: {
            color: '#FCB859',
          },
          label: {
            backgroundColor: '#FCB859',
          },
        },
      },
      legend: {
        show: false,
        data: legendData,
      },
      grid: {
        top: '15%',
        right: '1%',
        bottom: '2.5%',
        left: '1%',
        containLabel: true,
      },
      xAxis: [
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
            fontSize: 10,
            fontWeight: 600,
            color: '#FFF',
          },
        },
      ],
      yAxis: [
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
            fontSize: 10,
            fontWeight: 600,
            color: '#FFF',
          },
        },
      ],
      series: seriesData,
    }),
    [],
  );
  return <ReactEChart ref={chartRef} echarts={echarts} option={option} {...rest} />;
};

export default VisitorInsightsChart;
