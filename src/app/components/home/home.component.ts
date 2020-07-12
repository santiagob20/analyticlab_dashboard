import { Component, OnInit } from '@angular/core';
import { ServiceDatadashboardService } from '../../services/service-datadashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
  // template: '<ng-content select="app-navbar"></ng-content>'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}
