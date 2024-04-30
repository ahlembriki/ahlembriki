import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddarticleComponent } from './addarticle.component';

describe('AddarticleComponent', () => {
  let component: AddarticleComponent;
  let fixture: ComponentFixture<AddarticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddarticleComponent]
    });
    fixture = TestBed.createComponent(AddarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
