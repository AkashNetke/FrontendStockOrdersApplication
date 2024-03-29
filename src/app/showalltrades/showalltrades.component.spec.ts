import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowalltradesComponent } from './showalltrades.component';

describe('ShowalltradesComponent', () => {
  let component: ShowalltradesComponent;
  let fixture: ComponentFixture<ShowalltradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowalltradesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowalltradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
