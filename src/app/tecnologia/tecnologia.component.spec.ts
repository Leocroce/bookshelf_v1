import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiaComponent } from './../tecnologia/tecnologia.component'

describe('TecnologiaComponent', () => {
  let component: TecnologiaComponent;
  let fixture: ComponentFixture<TecnologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});