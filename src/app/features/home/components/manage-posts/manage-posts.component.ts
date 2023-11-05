import { Component, Input } from '@angular/core';
import { ITableUser } from '../../core/interfaces/post.interface';
import { MatDialog } from '@angular/material/dialog';
import { ManagePostsCreateComponent } from '../manage-posts-create/manage-posts-create.component';

@Component({
  selector: 'app-manage-posts',
  templateUrl: './manage-posts.component.html',
  styleUrls: ['./manage-posts.component.scss'],
})
export class ManagePostsComponent {
  @Input() rowData?: ITableUser;

  constructor(private dialog: MatDialog) {}

  openModal(): void {
    this.dialog.open(ManagePostsCreateComponent, {
      data: this.rowData,
    });
  }
}
