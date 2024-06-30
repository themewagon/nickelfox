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
import {
  GridOption,
  LegendOption,
  TooltipOption,
  XAXisOption,
  YAXisOption,
} from 'echarts/types/dist/shared.js';
import React, { ReactElement, useMemo } from 'react';

type LevelChartProps = {
  chartRef: React.MutableRefObject<EChartsReactCore | null>;
  seriesData?: BarSeriesOption[];
  tooltip?: TooltipOption;
  legendData?: LegendOption;
  grid?: GridOption;
  xAxis?: XAXisOption[];
  yAxis?: YAXisOption[];
  sx?: SxProps;
};

type LevelChartOptions = echarts.ComposeOption<
  BarSeriesOption | LegendComponentOption | TooltipComponentOption | GridComponentOption
>;

const LevelChart = ({
  chartRef,
  seriesData,
  tooltip,
  grid,
  legendData,
  xAxis,
  yAxis,
  ...rest
}: LevelChartProps): ReactElement => {
  const option: LevelChartOptions = useMemo(
    () => ({
      tooltip: tooltip,
      legend: legendData,
      xAxis: xAxis,
      yAxis: yAxis,
      grid: grid,
      series: seriesData,
    }),
    [],
  );

  return <ReactEChart ref={chartRef} option={option} echarts={echarts} {...rest} />;
};

export default LevelChart;
