import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabServiciosComponent } from './tab-servicios.component';

describe('TabServiciosComponent', () => {
  let component: TabServiciosComponent;
  let fixture: ComponentFixture<TabServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabServiciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
