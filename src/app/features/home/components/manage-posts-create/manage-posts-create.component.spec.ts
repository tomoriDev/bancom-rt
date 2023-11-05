import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePostsCreateComponent } from './manage-posts-create.component';

describe('ManagePostsCreateComponent', () => {
  let component: ManagePostsCreateComponent;
  let fixture: ComponentFixture<ManagePostsCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagePostsCreateComponent]
    });
    fixture = TestBed.createComponent(ManagePostsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
