import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalsCardComponent } from './approvals-card.component';

describe('ApprovalsCardComponent', () => {
  let component: ApprovalsCardComponent;
  let fixture: ComponentFixture<ApprovalsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
