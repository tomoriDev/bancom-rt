import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ITableColumnConfig } from '../../core/interfaces/table.interface';
import { UserModel } from '../../core/models/user.model';

@Component({
  selector: 'app-table-expandable-rows',
  templateUrl: './table-expandable-rows.component.html',
  styleUrls: ['./table-expandable-rows.component.scss'],
  animations: [
    trigger('detailExpand', [
      state(
        'collapsed',
        style({ height: '0px', minHeight: '0', display: 'none' })
      ),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TableExpandableRowsComponent implements OnChanges {
  @Input({ required: true }) columnsConfig: ITableColumnConfig[] = [];
  @Input({ required: true }) dataSource: UserModel[] = [];

  @Output() rowExpanded = new EventEmitter();

  columnsToDisplay: string[] = [];

  ngOnChanges(changes: any) {
    const values: ITableColumnConfig[] = changes.columnsConfig?.currentValue;
    if (values) {
      this.columnsToDisplay = values.map((column) => column.name);
      this.columnsToDisplay = [...this.columnsToDisplay, 'expand']
    }
  }

  toggleRow(element: { expanded: boolean }) {
    element.expanded = !element.expanded;
    this.rowExpanded.emit(element);
  }

  manageAllRows(flag: boolean) {
    this.dataSource.forEach((row) => {
      row.expanded = flag;
    });
  }
}
