# RadarChart

This library was generated with [Angular CLI](https://github.com/angular/angular-cli)

<p align="left">
<img src="../../assets/radarchart.png" alt="radarchart"/>
<p/>

## Code


`<rds-chart-radar`  
 ` chartId="radarChart0"`  
 ` [chartWidth]="400"`  
 ` [chartLabels]="chartLabels"`  
 ` [ChartDataSets]="ChartDataSets"`  
 ` [chartOptions]="chartOptions"`  
`></rds-chart-radar>`  

## Options
### Input
<!-- prettier-ignore -->
| Input Name                  | Type                             |Example| Description                                                                  |
| --------------------------- | -------------------------------- |------------| ---------------------------------------------------------------------------- |
| `ChartDataSets`             | `array list`        |`[{"label":"Dataset 1","data":[0.5,0.8,0.4,0.6,0.7,0.2,0.9],"borderColor":["#ff9f40"],"backgroundColor":["rgba(255, 99, 132, 0.2)"],"fill":false,"pointStyle":"circle","pointRadius":2},{"label":"Dataset 2","data":[0.9,0.3,0.8,0.9,0.1,0.7,0.2],"borderColor":["#ff6384"],"backgroundColor":["rgba(255, 206, 86, 0.2)"],"fill":true,"pointStyle":"circle","pointRadius":2},{"label":"Dataset 3","data":[0.7,0.2,0.1,0.9,0.8,0.4,0.7],"borderColor":["#83BE5A"],"backgroundColor":["rgba(255, 240, 204, 0.2)"],"fill":false,"pointStyle":"circle","pointRadius":2}]`|Data set of the Radar Chart`
| `chartLabels`               | `array`                          | `["Jan","Feb","Mar","Apr","May","jun","jul"]`|Specify chart labels|
| `chartWidth`                |  `string`                       | "200"|Specify the width of the chart|
| `chartHeight`                |  `number`                       | "200"|Specify the width of the chart|
| `chartId`                |  `string`                       | "chartid"|Specify the ID of the chart|
| `chartStyle`                |  `Dark`\|`light`                       | "Dark"|Specify the style of the chart|
|`chartOptions`|`Object`|`{"responsive":false,"chartArea":{"backgroundColor":"rgba(251, 85, 85, 0.4)"},"plugins":{"title":{"display":true,"text":"Radar Chart"},"legend":{"position":"left","align":"start","pointStyle":"rectRot","pointRadius":5,"labels":{"usePointStyle":true}},"tooltip":{"usePointStyle":true},"scale":{"type":"line","angleLines":{"display":true}}},"scales":{"r":{"axis":"r","type":"radialLinear","display":true,"animate":true,"position":"chartArea","angleLines":{"display":true,"lineWidth":1,"borderDash":[],"borderDashOffset":0,"color":"rgba(0,0,0,0.1)"},"grid":{"circular":false,"display":true,"lineWidth":1,"drawBorder":true,"drawOnChartArea":true,"drawTicks":true,"tickLength":8,"offset":false,"borderDash":[],"borderDashOffset":0,"borderWidth":1,"color":"rgba(0,0,0,0.1)","borderColor":"rgba(0,0,0,0.1)"},"startAngle":0,"ticks":{"showLabelBackdrop":true,"color":"#666","minRotation":0,"maxRotation":50,"mirror":false,"textStrokeWidth":0,"textStrokeColor":"","padding":3,"display":true,"autoSkip":true,"autoSkipPadding":3,"labelOffset":0,"minor":{},"major":{},"align":"center","crossAlign":"near","backdropColor":"rgba(255, 255, 255, 0.75)","backdropPadding":2},"pointLabels":{"backdropPadding":2,"display":true,"font":{"size":10},"padding":5,"centerPointLabels":false,"color":"#666"},"offset":false,"reverse":false,"beginAtZero":false,"bounds":"ticks","grace":0,"title":{"display":false,"text":"","padding":{"top":4,"bottom":4},"color":"#666"},"id":"r"}}}`|Chart options|
