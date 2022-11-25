import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
// import { ChartDataSet } from '@rds-common-lib';

export interface ChartDataSetLine {
  label: string,
  data: Array<number>;
  fill: boolean,
  borderColor: string,
  tension: number,
  backgroundColor: Array<string>;
  borderWidth: number;
}

@Component({
  selector: 'rds-chart-line',
  templateUrl: './rds-chart-line.component.html',
  styleUrls: ['./rds-chart-line.component.scss']
})
export class RdsChartLineComponent implements OnInit {

  canvas: any;
  ctx: any;
  gradientcolor: any = ['rgba(48,22,194,76%)', 'rgba(12,5,47,18%)'];
  static count = 0;
  //chartId = 'lineChart' + RdsChartLineComponent.count;;
  @Input() chartId: string = 'lineChart0';
  @Input() chartWidth = 200;
  @Input() chartHeight = 100;
  @Input() chartStyle?: any;
  @Input() chartLabels?: any
  @Input() gradient: boolean = false;
  @Input() canvasBackgroundColor?: any;
  @Input() chartDataSets?: ChartDataSetLine[] | any;
  @Input() chartOptions?: any;
  static inload: boolean;
  style: CSSStyleDeclaration;

  constructor() {
    this.style = getComputedStyle(document.body);
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.lineChartBrowser()
  }

  ngAfterViewInit() {
    this.lineChartBrowser();
  }

  lineChartBrowser(): void {
    let chartStatus = Chart.getChart(this.chartId);
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    this.canvas = document.getElementById(this.chartId);
    if (this.canvas !== null) {
      this.canvas.style.backgroundColor = this.canvasBackgroundColor;
      this.ctx = this.canvas.getContext('2d');
      this.chartDataSets.forEach((ele: any, index: number) => {
        let color = this.style.getPropertyValue('--chart-line-color' + (index + 1));
        const borderColor = this.style.getPropertyValue('--chart-line-border-color' + (index + 1));
        const pointBackgroundColor = this.style.getPropertyValue('--chart-line-point-color' + (index + 1));
        if (color) {
          if (borderColor) {
            ele.borderColor = borderColor;
          }
          if (pointBackgroundColor) {
            ele.pointBackgroundColor = pointBackgroundColor;
          }
          const gradient = this.ctx.createLinearGradient(0, 25, 0, 210);
          color = color.replace(/[\d\.]+\)$/g, '.76)');
          gradient.addColorStop(0.1, color);
          color = color.replace(/[\d\.]+\)$/g, '.08)');
          gradient.addColorStop(1, color);
          ele.backgroundColor = gradient;
        }
      })

      if (this.style.getPropertyValue('--chart-line-legend-color')) {
        if (this.chartOptions) {
          const legend = this.style.getPropertyValue('--chart-line-legend-color');
          if (legend) {
            this.chartOptions['plugins']['legend']['labels']['color'] = legend;
          }
          if (this.chartOptions['scales']) {
            Object.keys(this.chartOptions['scales']).forEach((ele, index) => {
              if (ele) {
                if (this.chartOptions['scales'][ele] && this.chartOptions['scales'][ele]['ticks']) {
                  const tickColor = this.style.getPropertyValue('--chart-line-scale-color' + (index + 1))
                  this.chartOptions['scales'][ele]['ticks']['color'] = tickColor;
                }
              }
            })
          }
        }
      }

      const lineCanvas = new Chart(this.ctx, {
        type: 'line',
        data: {
          labels: this.chartLabels,
          datasets: this.chartDataSets,
        },
        options: this.chartOptions
      });
      if (lineCanvas !== null) {
        lineCanvas.canvas.style.height = this.chartHeight + 'px';
        lineCanvas.canvas.style.width = this.chartWidth + 'px';
      }
    }
  }

}
