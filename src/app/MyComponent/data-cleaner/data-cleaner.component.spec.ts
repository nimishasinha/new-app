import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCleanerComponent } from './data-cleaner.component';

describe('DataCleanerComponent', () => {
  let component: DataCleanerComponent;
  let fixture: ComponentFixture<DataCleanerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataCleanerComponent]
    });
    fixture = TestBed.createComponent(DataCleanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
