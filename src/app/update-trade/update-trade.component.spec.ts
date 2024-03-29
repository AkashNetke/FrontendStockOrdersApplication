import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTradeComponent } from './update-trade.component';

describe('UpdateTradeComponent', () => {
  let component: UpdateTradeComponent;
  let fixture: ComponentFixture<UpdateTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateTradeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
