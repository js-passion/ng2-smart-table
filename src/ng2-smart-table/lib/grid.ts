import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { EventEmitter } from '@angular/core';

import { Deferred, getDeepFromObject } from './helpers';
import { Column } from './data-set/column';
import { Row } from './data-set/row';
import { DataSet } from './data-set/data-set';
import { DataSource } from './data-source/data-source';
import { ValidatorService } from './validator.service';

export class Grid {

  createFormShown: boolean = false;

  source: DataSource;
  settings: any;
  dataSet: DataSet;
  deletedIndex: number;

  onSelectRowSource = new Subject<any>();

  constructor(source: DataSource, settings: any, validator: ValidatorService) {
    this.setSettings(settings, validator);
    this.setSource(source);
  }

  showActionColumn(position: string): boolean {
    return this.isCurrentActionsPosition(position) && this.isActionsVisible();
  }

  isCurrentActionsPosition(position: string): boolean {
    return position == this.getSetting('actions.position');
  }

  isActionsVisible(): boolean {
    return this.getSetting('actions.add') || this.getSetting('actions.edit') || this.getSetting('actions.delete') || this.getSetting('actions.custom').length;
  }

  isMultiSelectVisible(): boolean {
    return this.getSetting('selectMode') === 'multi';
  }

  getNewRow(): Row {
    return this.dataSet.newRow;
  }


  toggleCheckBoxOnCancel() {
    let rows = [];
    const page = this.source.getPaging().page;
    const perPage = this.source.getPaging().perPage;
    rows = this.dataSet.getRows().slice(0, 10);
    let isEditable = false;
    for (const row of rows) {
      if (row.isDeleted || row.isInEditing || row.isReissued || row.isRevoked || row.isUndo) {
        isEditable = true;
      }
    }
    if (!isEditable) {
      for (const row of rows) {
        row.disableCheckBox = false;
      }
    }

  }
  disableCheckBoxes() {
    const rows = this.dataSet.getRows().slice(0, 10);
    for (let row of rows) {
      row.isSelected = false;
      row.disableCheckBox = true;
    }
  }


  toggleSorting(toggleOn: boolean) {
    const columns = this.dataSet.getColumns();
    for (const column of columns) {
      if (toggleOn) {
        column.isSortable = true;
      } else {
        column.isSortable = false;
      }
    }
  }

  toggleFiltering(toggleOn: boolean) {
    const columns = this.dataSet.getColumns();
    for (const column of columns) {
      if (toggleOn) {
        column.isFilterable = true;
      } else {
        column.isFilterable = false;
      }
    }
  }

  toggleFilteringOnCancel() {
    let rows = [];
    const page = this.source.getPaging().page;
    const perPage = this.source.getPaging().perPage;
    rows = this.dataSet.getRows().slice(0, 10);
    let isEditable = false;
    for (const row of rows) {
      if (row.isDeleted || row.isInEditing || row.isReissued || row.isRevoked || row.isUndo) {
        isEditable = true;
      }
    }
    if (!isEditable) {
      this.toggleFiltering(true);
    }
  }

  toggleSortingOnCancel() {
    let rows = [];
    const page = this.source.getPaging().page;
    const perPage = this.source.getPaging().perPage;
    rows = this.dataSet.getRows().slice(0, 10);
    let isEditable = false;
    for (const row of rows) {
      if (row.isDeleted || row.isInEditing || row.isReissued || row.isRevoked || row.isUndo) {
        isEditable = true;
      }
    }
    if (!isEditable) {
      this.toggleSorting(true);
    }

  }

  enableEditDelete(data: Object) {
    const row = this.dataSet.findRowByData(data);
    this.dataSet.findRowByData(data).isDeleted = false;
    this.dataSet.findRowByData(data).isInEditing = false;
    this.dataSet.findRowByData(data).isReissued = false;
    this.dataSet.findRowByData(data).isRevoked = false;
    this.dataSet.findRowByData(data).isUndo = false;
    row.disableCheckBox = false;
    this.settings.actions.delete = false;
  }

  setSettings(settings: Object, validator: ValidatorService) {
    this.settings = settings;
    this.dataSet = new DataSet([], this.getSetting('columns'), validator);

    if (this.source) {
      this.source.refresh();
    }
  }

  getDataSet(): DataSet {
    return this.dataSet;
  }

  getAllRecords(): any[] {
    let rows = this.getRows();
    let records: any[] = [];
    let pushRecord = false;
    for (let row of rows) {
      let record = {
        data: {},
        action: ''
      };
      if (row.isDeleted) {
        record.action = 'DELETE';
        pushRecord = true;
      } else if (row.isInEditing && !row.isNewRow) {
        record.action = 'EDIT';
        pushRecord = true;
      } else if (row.isNewRow) {
        record.action = 'ADD';
        pushRecord = true;
      }
      if (pushRecord) {
        record.data = row.getNewData();
        records.push(record);
      }
      pushRecord = false;
    }
    return records;
  }

  setSource(source: DataSource) {
    this.source = this.prepareSource(source);

    this.source.onChanged().subscribe((changes) => this.processDataChange(changes));

    this.source.onUpdated().subscribe((data) => {
      const changedRow = this.dataSet.findRowByData(data);
      changedRow.setData(data);
    });
  }

  getSetting(name: string, defaultValue?: any): any {
    return getDeepFromObject(this.settings, name, defaultValue);
  }

  getColumns(): Array<Column> {
    return this.dataSet.getColumns();
  }

  getRows(): Array<Row> {
    return this.dataSet.getRows();
  }

  selectRow(row: Row) {
    this.dataSet.selectRow(row);
  }

  multipleSelectRow(row: Row) {
    this.dataSet.multipleSelectRow(row);
  }

  onSelectRow(): Observable<any> {
    return this.onSelectRowSource.asObservable();
  }

  edit(row: Row) {
    row.isInEditing = true;
  }

  create(row: Row, confirmEmitter: EventEmitter<any>) {

    const deferred = new Deferred();
    deferred.promise.then((newData) => {
      newData = newData ? newData : row.getNewData();
      if (deferred.resolve.skipAdd) {
        this.createFormShown = false;
      } else {
        this.source.prepend(newData).then(() => {
          this.createFormShown = false;
          this.dataSet.addInsertedRowValidator();
        })
      }
    }).catch((err) => {
      // doing nothing
    });

    if (this.getSetting('add.confirmCreate')) {
      confirmEmitter.emit({
        newData: row.getNewData(),
        source: this.source,
        confirm: deferred,
        validator: this.dataSet.newRowValidator,
      });
    } else {
      if (this.dataSet.newRowValidator.invalid)
        deferred.reject();
      else
        deferred.resolve();
    }
  }

  save(row: Row, confirmEmitter: EventEmitter<any>) {

    const deferred = new Deferred();
    deferred.promise.then((newData) => {
      newData = newData ? newData : row.getNewData();
      if (deferred.resolve.skipEdit) {
        row.isInEditing = false;
      } else {
        this.source.update(row.getData(), newData).then(() => {
          row.isInEditing = false;
          this.dataSet.addInsertedRowValidator();
        });
      }
    }).catch((err) => {
      // doing nothing
    });

    if (this.getSetting('edit.confirmSave')) {
      confirmEmitter.emit({
        data: row.getData(),
        newData: row.getNewData(),
        source: this.source,
        confirm: deferred,
        validator: this.dataSet.newRowValidator,
      });
    } else {
      if (this.dataSet.newRowValidator.invalid)
        deferred.reject();
      else
        deferred.resolve();
    }
  }

  deleteNewRow(data: any, index: any) {
    let row = this.dataSet.findRowByData(data);
    if (row.isNewRow) {
      this.source.remove(row.getData());
      this.deletedIndex = index;
    }
  }
  delete(row: Row, confirmEmitter: EventEmitter<any>) {

    const deferred = new Deferred();
    deferred.promise.then(() => {
      if (this.getSetting('mode') !== 'custom') {
        this.source.remove(row.getData());
        this.dataSet.editRowValidators = this.dataSet.editRowValidators.splice(row.index, 1);
      }
    }).catch((err) => {
      // doing nothing
    });

    if (this.getSetting('delete.confirmDelete')) {
      confirmEmitter.emit({
        data: row.getData(),
        source: this.source,
        confirm: deferred,
      });
    } else {
      deferred.resolve();
    }
  }

  processDataChange(changes: any) {
    let event = changes;
    let index = 0;
    if (this.shouldProcessChange(changes)) {
      const rows = this.dataSet.getRows().slice(0, 10);
      this.dataSet.setData(changes['elements']);
      const newRows = this.dataSet.getRows().slice(0, 10);
      if (['remove'].indexOf(changes['action']) !== -1) {
        let oldIndex = 0;
        // restore old status of rows because when data set changes new rows are created 
        // from scratch and we lose the old status, hence copying the old status into newly created rows.
        for (let index = 0; index < 9; index++) {
          if (oldIndex === this.deletedIndex) {
            oldIndex = oldIndex + 1;
          }
          newRows[index].isDeleted = rows[oldIndex].isDeleted;
          newRows[index].isInEditing = rows[oldIndex].isInEditing;
          newRows[index].isReissued = rows[oldIndex].isReissued;
          newRows[index].isRevoked = rows[oldIndex].isRevoked;
          newRows[index].isUndo = rows[oldIndex].isUndo;
          newRows[index].isSelected = rows[index].isSelected;
          newRows[index].disableCheckBox = rows[oldIndex].disableCheckBox;
          newRows[index].isNewRow = rows[oldIndex].isNewRow;
          oldIndex++;
        }
      } else {
        if ((newRows.length > 0) && (rows.length > 0)) {
          // restore old status of rows because when data set changes new rows are created 
          // from scratch and we lose the old status, hence copying the old status into newly created rows.
          while (index < 9) {
            if (newRows[index + 1].isNewRow) {
              newRows[index + 1].isInEditing = true;
            }
            newRows[index + 1].isDeleted = rows[index].isDeleted;
            // if (newRows[index + 1].isDeleted) {
            //   this.settings.actions.delete = true;
            // }
            newRows[index + 1].isInEditing = rows[index].isInEditing;
            newRows[index + 1].isNewRow = rows[index].isNewRow;
            newRows[index + 1].isReissued = rows[index].isReissued;
            newRows[index + 1].isRevoked = rows[index].isRevoked;
            newRows[index + 1].isUndo = rows[index].isUndo;
            newRows[index + 1].isSelected = rows[index].isSelected;
            newRows[index + 1].disableCheckBox = rows[index].disableCheckBox;

            index++;
          }
          newRows[0].isInEditing = true;
          newRows[0].isNewRow = true;
          newRows[0].disableCheckBox = true;
          newRows[0].isSelected = false;
        }
      }
      if (this.getSetting('selectMode') !== 'multi') {
        const row = this.determineRowToSelect(changes);
        if (row) {
          this.onSelectRowSource.next(newRows[0]);
        }
      }
    }
  }

  shouldProcessChange(changes: any): boolean {
    if (['filter', 'sort', 'page', 'remove', 'refresh', 'load', 'paging'].indexOf(changes['action']) !== -1) {
      return true;
    } else if (['prepend', 'append'].indexOf(changes['action']) !== -1 && !this.getSetting('pager.display')) {
      return true;
    }
    return false;
  }

  // TODO: move to selectable? Separate directive
  determineRowToSelect(changes: any): Row {

    if (['load', 'page', 'filter', 'sort', 'refresh'].indexOf(changes['action']) !== -1) {
      return this.dataSet.select();
    }
    if (changes['action'] === 'remove') {
      if (changes['elements'].length === 0) {
        // we have to store which one to select as the data will be reloaded
        this.dataSet.willSelectLastRow();
      } else {
        return this.dataSet.selectPreviousRow();
      }
    }
    if (changes['action'] === 'append') {
      // we have to store which one to select as the data will be reloaded
      this.dataSet.willSelectLastRow();
    }
    if (changes['action'] === 'add') {
      return this.dataSet.selectFirstRow();
    }
    if (changes['action'] === 'update') {
      return this.dataSet.selectFirstRow();
    }
    if (changes['action'] === 'prepend') {
      // we have to store which one to select as the data will be reloaded
      this.dataSet.willSelectFirstRow();
    }
    return null;
  }

  prepareSource(source: any): DataSource {
    const initialSource: any = this.getInitialSort();
    if (initialSource && initialSource['field'] && initialSource['direction']) {
      source.setSort([initialSource], false);
    }
    if (this.getSetting('pager.display') === true) {
      source.setPaging(1, this.getSetting('pager.perPage'), false);
    }

    source.refresh();
    return source;
  }

  getInitialSort() {
    const sortConf: any = {};
    this.getColumns().forEach((column: Column) => {
      if (column.isSortable && column.defaultSortDirection) {
        sortConf['field'] = column.id;
        sortConf['direction'] = column.defaultSortDirection;
        sortConf['compare'] = column.getCompareFunction();
      }
    });
    return sortConf;
  }

  getSelectedRows(): Array<any> {
    return this.dataSet.getRows()
      .filter(r => r.isSelected);
  }

  selectAllRows(status: any) {
    this.dataSet.getRows()
      .forEach(r => r.isSelected = status);
  }

  getFirstRow(): Row {
    return this.dataSet.getFirstRow();
  }

  getLastRow(): Row {
    return this.dataSet.getLastRow();
  }

}
