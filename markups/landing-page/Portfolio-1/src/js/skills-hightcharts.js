import Highchart from 'highcharts';

const chartOptions = {
  chart: { type: 'areaspline' }, title: null,
  yAxis: {
      min: 50, max: 100,
      labels: { format: '{value}%' },
      title: { enabled: false }
  },
  xAxis: {
    type: 'category',
    minorTickLength: 0,
    tickLength: 0,
    labels: { useHTML: true }
  },
  legend: { enabled: false }, tooltip: { enabled: false },
  plotOptions: {
    series: { 
      marker: {
          fillColor: 'black',
          enabled: true,
          symbol: 'circle',
          states: { hover: { enabled: true } }
      },
    }
  },
  series: [{ data: [ ] }]
}

let instance;

export class SkillsHighchart {
  
  constructor(containerSelector) {
    if (!instance) { instance = this; }
    
    this.containerSelector = containerSelector;
    this.options = chartOptions;

    return instance;
  }
  
  /**
   * @param { [{display, val}] } data 
   */
  setData(data) {
    this.options.series[0].data = data.map( item => ([item.display, item.value]));
  };

  renderChart() {
    Highchart.chart(this.containerSelector, this.options);
  }

}