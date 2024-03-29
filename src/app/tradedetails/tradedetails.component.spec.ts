import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradedetailsComponent } from './tradedetails.component';

describe('TradedetailsComponent', () => {
  let component: TradedetailsComponent;
  let fixture: ComponentFixture<TradedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TradedetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TradedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
