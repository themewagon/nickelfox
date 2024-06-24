import { SxProps } from '@mui/material';
import ReactEChart from 'components/base/ReactEChart';
import * as echarts from 'echarts';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { GaugeSeriesOption } from 'echarts/charts';
import {
  GridComponentOption,
  LegendComponentOption,
  TooltipComponentOption,
} from 'echarts/components';
import { useMemo } from 'react';

type EarningsChartProps = {
  chartRef: React.MutableRefObject<EChartsReactCore | null>;
  seriesData?: GaugeSeriesOption[];
  legendData?: any;
  colors?: string[];
  sx?: SxProps;
};

type EarningsChartOptions = echarts.ComposeOption<
  GaugeSeriesOption | LegendComponentOption | TooltipComponentOption | GridComponentOption
>;

const EarningsChart = ({
  chartRef,
  seriesData,
  legendData,
  colors,
  ...rest
}: EarningsChartProps) => {
  const option: EarningsChartOptions = useMemo(
    () => ({
      series: [
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 100,
          radius: '150%',
          center: ['50%', '100%'],
          splitNumber: 10,
          itemStyle: {
            color: '#A9DFD8',
            borderWidth: 0,
          },
          progress: {
            show: true,
            roundCap: false,
            width: 22,
          },
          pointer: {
            icon: 'roundRect',
            length: '60%',
            width: 5,
            offsetCenter: [0, -48],
            itemStyle: {
              borderWidth: 20,
            },
          },
          axisLine: {
            roundCap: false,
            lineStyle: {
              width: 22,
              color: [[1, '#2B2B36']],
            },
          },
          axisTick: {
            show: false,
            splitNumber: 2,
            lineStyle: {
              width: 2,
              color: '#2B2B36',
            },
          },
          splitLine: {
            show: false,
            length: 12,
            lineStyle: {
              width: 3,
              color: '#2B2B36',
            },
          },
          axisLabel: {
            show: false,
            distance: 30,
            color: '#2B2B36',
            fontSize: 20,
          },
          title: {
            show: false,
          },
          grid: {
            bottom: 0,
          },
          detail: {
            show: false,
            backgroundColor: '#fff',
            width: '70%',
            lineHeight: 40,
            height: 40,
            borderRadius: 8,
            offsetCenter: [0, -30],
            valueAnimation: true,
            formatter: function (value: any) {
              return value + '%';
            },
            rich: {
              value: {
                fontSize: 50,
                fontWeight: 'bolder',
                color: '#777',
              },
              unit: {
                fontSize: 20,
                color: '#999',
                padding: [0, 0, -20, 10],
              },
            },
          },
          data: [
            {
              value: 80,
            },
          ],
        },
      ],
    }),
    [],
  );

  return <ReactEChart ref={chartRef} option={option} echarts={echarts} {...rest}></ReactEChart>;
};

export default EarningsChart;
