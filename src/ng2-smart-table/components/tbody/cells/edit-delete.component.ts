import {Component, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy } from '@angular/core';

import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
import { DataSource } from '../../../lib/data-source/data-source';
import { Deferred, getDeepFromObject } from '../../../lib/helpers';

@Component({
  selector: 'ng2-st-tbody-edit-delete',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './edit-delete.component.html',
})
export class TbodyEditDeleteComponent implements OnChanges {

  @Input() grid: Grid;
  @Input() row: Row;
  @Input() source: DataSource;
  @Input() deleteConfirm: EventEmitter<any>;
  @Input() editConfirm: EventEmitter<any>;

  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() editRowSelect = new EventEmitter<any>();

  isActionEdit: boolean;
  isActionDelete: boolean;
  editRowButtonContent: string;
  deleteRowButtonContent: string;
  action: string = '';

  onEdit(event: any) {
    event.preventDefault();
    event.stopPropagation();

    this.editRowSelect.emit(this.row);

    if (this.grid.getSetting('mode') === 'external') {
      this.edit.emit({
        data: this.row.getData(),
        source: this.source,
      });
    } else if (this.grid.getSetting('mode') === 'custom') {
      const deferred = new Deferred();
      deferred.promise.then((newData) => {
        this.grid.edit(this.row);
      }).catch((err) => {
        // do nothing
      });
      this.edit.emit({
        index: this.row.index,
        data: this.row.getData(),
        source: this.source,
        edit: deferred,
      });
      deferred.resolve();
    } else {
      this.grid.edit(this.row);
    }
  }

  onDelete(event: any) {
    event.preventDefault();
    event.stopPropagation();

    if (this.grid.getSetting('mode') === 'external') {
      this.delete.emit({
        data: this.row.getData(),
        source: this.source,
      });
    } else if (this.grid.getSetting('mode') === 'custom') {
      const deferred = new Deferred();
      deferred.promise.then((newData) => {
        this.grid.delete(this.row, this.deleteConfirm);
      }).catch((err) => {
        this.row.isDeleted = false;
      });
      this.delete.emit({
        index: this.row.index,
        data: this.row.getData(),
        source: this.source,
        delete: deferred,
      });
      deferred.resolve();
    } else {
      this.grid.delete(this.row, this.deleteConfirm);
    }
  }

  onChange(event: any, value: string) {
    this.row.isDeleted = false;
    switch (value) {
      case 'edit':
        this.onEdit(event);
        break;
      case 'delete':
        this.row.isDeleted = true;
        this.onDelete(event);
        break;
      default:
        break;
    }
    event.target.value = '';
  }
  ngOnChanges() {
    this.isActionEdit = this.grid.getSetting('actions.edit');
    this.isActionDelete = this.grid.getSetting('actions.delete');
    this.editRowButtonContent = this.grid.getSetting('edit.editButtonContent');
    this.deleteRowButtonContent = this.grid.getSetting('delete.deleteButtonContent');
  }
}
