import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIndividualDetailsComponent } from './view-individual-details.component';

describe('ViewIndividualDetailsComponent', () => {
  let component: ViewIndividualDetailsComponent;
  let fixture: ComponentFixture<ViewIndividualDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewIndividualDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIndividualDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
