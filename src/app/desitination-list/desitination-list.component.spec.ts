import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesitinationListComponent } from './desitination-list.component';

describe('DesitinationListComponent', () => {
  let component: DesitinationListComponent;
  let fixture: ComponentFixture<DesitinationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesitinationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesitinationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
