import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTableRowComponent } from './admin-table-row.component';

describe('AdminTableRowComponent', () => {
  let component: AdminTableRowComponent;
  let fixture: ComponentFixture<AdminTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
