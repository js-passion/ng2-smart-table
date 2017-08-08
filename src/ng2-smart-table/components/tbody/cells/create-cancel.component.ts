import { Component, Input, EventEmitter, OnChanges, Output } from '@angular/core';

import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';

@Component({
  selector: 'ng2-st-tbody-create-cancel',
  template: `
    <a href="#" *ngIf="showUpdate" class="ng2-smart-action ng2-smart-action-edit-save"
        [innerHTML]="saveButtonContent" (click)="onSave($event)"></a>
    <a href="#" class="ng2-smart-action ng2-smart-action-edit-cancel"
        [innerHTML]="cancelButtonContent" (click)="onCancelEdit($event)"></a>
  `,
})
export class TbodyCreateCancelComponent implements OnChanges {

  @Input() grid: Grid;
  @Input() row: Row;
  @Input() editConfirm: EventEmitter<any>;

  @Output() cancelUpdate = new EventEmitter<any>();

  cancelButtonContent: string;
  saveButtonContent: string;
  showUpdate: boolean;

  onSave(event: any) {
    event.preventDefault();
    event.stopPropagation();

    this.grid.save(this.row, this.editConfirm);
  }

  onCancelEdit(event: any) {
    event.preventDefault();
    event.stopPropagation();

    this.row.isInEditing = false;
    this.row.isDeleted = false;

    if (this.grid.getSetting('mode') === 'custom') {
      this.cancelUpdate.emit({
        index: this.row.index,
        data: this.row.getData(),
      });
    }
  }

  ngOnChanges() {
    this.saveButtonContent = this.grid.getSetting('edit.saveButtonContent');
    this.cancelButtonContent = this.grid.getSetting('edit.cancelButtonContent')
    this.showUpdate = !(this.grid.getSetting('mode') === 'custom');
  }
}
