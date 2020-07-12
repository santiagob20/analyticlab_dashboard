import { TestBed } from '@angular/core/testing';

import { ServiceDatadashboardService } from './service-datadashboard.service';

describe('ServiceDatadashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceDatadashboardService = TestBed.get(ServiceDatadashboardService);
    expect(service).toBeTruthy();
  });
});
