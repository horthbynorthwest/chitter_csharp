import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeepListComponent } from './peep-list.component';

describe('PeepListComponent', () => {
  let component: PeepListComponent;
  let fixture: ComponentFixture<PeepListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeepListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeepListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
