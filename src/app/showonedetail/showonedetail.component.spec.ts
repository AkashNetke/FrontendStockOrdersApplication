import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowonedetailComponent } from './showonedetail.component';

describe('ShowonedetailComponent', () => {
  let component: ShowonedetailComponent;
  let fixture: ComponentFixture<ShowonedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowonedetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowonedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
