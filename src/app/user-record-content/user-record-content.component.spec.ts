import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecordContentComponent } from './user-record-content.component';

describe('UserRecordContentComponent', () => {
  let component: UserRecordContentComponent;
  let fixture: ComponentFixture<UserRecordContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRecordContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRecordContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
