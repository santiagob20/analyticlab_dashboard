import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCommercesComponent } from './table-commerces.component';

describe('TableCommercesComponent', () => {
  let component: TableCommercesComponent;
  let fixture: ComponentFixture<TableCommercesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCommercesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCommercesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
