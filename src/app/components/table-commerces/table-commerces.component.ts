import { Component, OnInit } from '@angular/core';
import { ServiceDatadashboardService } from '../../services/service-datadashboard.service';
import { Commerce } from '../../models/commerce';

@Component({
  selector: 'app-table-commerces',
  templateUrl: './table-commerces.component.html',
  styleUrls: ['./table-commerces.component.scss']
})
export class TableCommercesComponent implements OnInit {

  // dataTable:Array<Commerce>;
  dataTable: any;
  constructor(private tableService: ServiceDatadashboardService) { }

  ngOnInit() {
    this.getTableData()
  }


  getTableData() {
    this.tableService.getCommerces().subscribe(
      res => {
        // console.log(res)
        this.dataTable = res;

        this.dataTable.forEach(el => {
          el.sales =  this.numberWithCommas(el.sales * this.getRandomInt(2,15))
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
