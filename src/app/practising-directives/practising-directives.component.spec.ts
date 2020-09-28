import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractisingDirectivesComponent } from './practising-directives.component';

describe('PractisingDirectivesComponent', () => {
  let component: PractisingDirectivesComponent;
  let fixture: ComponentFixture<PractisingDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractisingDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractisingDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
