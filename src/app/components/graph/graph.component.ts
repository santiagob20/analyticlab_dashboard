import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { ServiceDatadashboardService } from '../../services/service-datadashboard.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  chartSales = [];
  chartData: any = [[''], ['']];
  tmpres: any;
  constructor(private chartService: ServiceDatadashboardService) { }


  ngOnInit() {
    this.renderGraph()
  }


  renderGraph() {
    this.chartService.getCommerces().subscribe(
      res => {
        // console.log(res)
        this.tmpres = res;
        let index = 0;
        this.tmpres.forEach(el => {
          this.chartData[0].push(el.name);
          this.chartData[1].push(el.sales * this.getRandomInt(2, 15));
          index++;
        });


        // render chart
        this.chartSales = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: this.chartData[0],
            datasets: [{
              label: '# of Votes',
              data: this.chartData[1],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      }
    );


  }

  numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
      x = x.replace(pattern, "$1,$2");
    return x;
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
