import { SxProps } from '@mui/material';
import ReactEChart from 'components/base/ReactEChart';
import { BarSeriesOption } from 'echarts';
import * as echarts from 'echarts';
import EChartsReactCore from 'echarts-for-react/lib/core';
import {
  GridComponentOption,
  LegendComponentOption,
  TooltipComponentOption,
} from 'echarts/components';
import React, { ReactElement, useMemo } from 'react';

type LevelChartProps = {
  chartRef: React.MutableRefObject<EChartsReactCore | null>;
  seriesData?: BarSeriesOption[];
  legendData?: any;
  colors?: string[];
  sx?: SxProps;
};

type LevelChartOptions = echarts.ComposeOption<
  BarSeriesOption | LegendComponentOption | TooltipComponentOption | GridComponentOption
>;

const LevelChart = ({
  chartRef,
  seriesData,
  legendData,
  colors,
  ...rest
}: LevelChartProps): ReactElement => {
  const option: LevelChartOptions = useMemo(
    () => ({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        show: false,
        data: legendData,
      },
      xAxis: [
        {
          type: 'category',
          show: false,
          axisTick: { show: false },
          data: ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5', 'Level 6'],
        },
      ],
      yAxis: [
        {
          type: 'value',
          show: false,
        },
      ],
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
      series: seriesData,
    }),
    [],
  );

  return <ReactEChart ref={chartRef} option={option} echarts={echarts} {...rest} />;
};

export default LevelChart;
