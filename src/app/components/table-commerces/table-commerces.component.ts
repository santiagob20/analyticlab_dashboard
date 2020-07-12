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
  dataTable:any;
  constructor(private tableService: ServiceDatadashboardService) { }

  ngOnInit() {
    this.getTableData()
  }


  getTableData() {
    this.tableService.getCommerces().subscribe(
      res => {
        // console.log(res)
        this,this.dataTable = res;
        // res.forEach(element => {
          
        // });
        // this.dataTable = res;

      }
    );
  }
}
