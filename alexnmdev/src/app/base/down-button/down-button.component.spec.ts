import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownButtonComponent } from './down-button.component';

describe('DownButtonComponent', () => {
  let component: DownButtonComponent;
  let fixture: ComponentFixture<DownButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DownButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
