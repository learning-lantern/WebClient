import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoMatComponent } from './todo-mat.component';

describe('TodoMatComponent', () => {
  let component: TodoMatComponent;
  let fixture: ComponentFixture<TodoMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoMatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
