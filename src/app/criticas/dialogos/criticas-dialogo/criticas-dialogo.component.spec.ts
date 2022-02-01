import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticasDialogoComponent } from './criticas-dialogo.component';

describe('CriticasDialogoComponent', () => {
  let component: CriticasDialogoComponent;
  let fixture: ComponentFixture<CriticasDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriticasDialogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticasDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
