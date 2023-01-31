import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSourceAdminComponent } from './data-source-admin.component';

describe('DataSourceAdminComponent', () => {
  let component: DataSourceAdminComponent;
  let fixture: ComponentFixture<DataSourceAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSourceAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSourceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
