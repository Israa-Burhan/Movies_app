import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivcyComponent } from './privcy.component';

describe('PrivcyComponent', () => {
  let component: PrivcyComponent;
  let fixture: ComponentFixture<PrivcyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivcyComponent]
    });
    fixture = TestBed.createComponent(PrivcyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
