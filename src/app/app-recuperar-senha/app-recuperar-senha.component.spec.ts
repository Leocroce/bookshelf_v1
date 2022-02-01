import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRecuperarSenhaComponent } from './app-recuperar-senha.component';

describe('AppRecuperarSenhaComponent', () => {
  let component: AppRecuperarSenhaComponent;
  let fixture: ComponentFixture<AppRecuperarSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppRecuperarSenhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRecuperarSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
