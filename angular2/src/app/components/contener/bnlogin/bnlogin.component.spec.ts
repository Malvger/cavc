import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnloginComponent } from './bnlogin.component';

describe('BnloginComponent', () => {
  let component: BnloginComponent;
  let fixture: ComponentFixture<BnloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BnloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BnloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
