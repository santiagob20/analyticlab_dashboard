import { Component, OnInit } from '@angular/core';
import { ServiceDatadashboardService } from '../../services/service-datadashboard.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  dataMap: any;
  constructor(private mapService: ServiceDatadashboardService) { }

  ngOnInit() {
    this.mapService.buildMap();
  }

  ngAfterViewInit() {
    // this.getDataMap()
    this.getDataMap()

  }

  getDataMap() {
    this.mapService.getDataMap().subscribe(
      res => {
        this.dataMap = res;
        // this.dataMap.features.forEach(el => {
          //   el.properties.icon = 'convenience'
          
          // });
        // console.log(this.dataMap)
        setTimeout(()=> {
          this.mapService.addMapSource(this.dataMap)
        }, 1000);

      }
    );
  }
}
