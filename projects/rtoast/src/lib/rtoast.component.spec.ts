import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtoastComponent } from './rtoast.component';

describe('RtoastComponent', () => {
  let component: RtoastComponent;
  let fixture: ComponentFixture<RtoastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RtoastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtoastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
