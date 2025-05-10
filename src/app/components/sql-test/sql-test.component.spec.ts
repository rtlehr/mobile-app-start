import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SqlTestComponent } from './sql-test.component';

describe('SqlTestComponent', () => {
  let component: SqlTestComponent;
  let fixture: ComponentFixture<SqlTestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SqlTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SqlTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
