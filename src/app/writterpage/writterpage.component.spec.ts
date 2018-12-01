import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritterpageComponent } from './writterpage.component';

describe('WritterpageComponent', () => {
  let component: WritterpageComponent;
  let fixture: ComponentFixture<WritterpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritterpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
