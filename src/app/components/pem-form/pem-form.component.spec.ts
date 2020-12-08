import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemFormComponent } from './pem-form.component';

describe('PemFormComponent', () => {
  let component: PemFormComponent;
  let fixture: ComponentFixture<PemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
