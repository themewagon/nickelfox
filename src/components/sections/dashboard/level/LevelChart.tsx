const LevelChart = () => {
  const data = {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    series: [
      {
        name: 'Volume',
        data: [14000, 30000, 38000, 36000, 16000, 24000],
      },
      {
        name: 'Service',
        data: [12000, 20000, 26000, 12000, 10000, 32000],
      },
    ],
  };
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      top: 40,
      bottom: 70,
      left: 50,
      right: 0,
    },
    xAxis: {
      type: 'category',
      data: data.categories,
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      interval: 20000,
      max: 100000,
    },
    series: data.series.map((item, index) => ({
      name: item.name,
      type: 'bar',
      stack: 'total',
      barWidth: 26,
      roundCap: true,
      label: {
        show: false,
      },
      emphasis: {
        focus: 'series',
      },
      itemStyle: {
        color: index === 0 ? '#A9DFD8' : '#2B2B36',
      },
      data: item.data,
    })),
  };

  return <div>LevelChart</div>;
};

export default LevelChart;
