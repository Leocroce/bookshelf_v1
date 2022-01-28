import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheSagaComponent } from './detalhe-saga.component';

describe('DetalheSagaComponent', () => {
  let component: DetalheSagaComponent;
  let fixture: ComponentFixture<DetalheSagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheSagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheSagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
