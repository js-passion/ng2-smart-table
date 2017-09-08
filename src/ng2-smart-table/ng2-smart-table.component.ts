import { Component, Input, Output, SimpleChange, EventEmitter, OnChanges } from '@angular/core';

import { Grid } from './lib/grid';
import { DataSource } from './lib/data-source/data-source';
import { Row } from './lib/data-set/row';
import { Deferred, deepExtend } from './lib/helpers';
import { LocalDataSource } from './lib/data-source/local/local.data-source';
import { ValidatorService } from './lib/validator.service';

@Component({
  selector: 'ng2-smart-table',
  styleUrls: ['./ng2-smart-table.component.scss'],
  templateUrl: './ng2-smart-table.component.html',
})
export class Ng2SmartTableComponent implements OnChanges {

  @Input() source: any;
  @Input() settings: Object = {};

  @Output() rowSelect = new EventEmitter<any>();
  @Output() userRowSelect = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();
  @Output() create = new EventEmitter<any>();
  @Output() custom = new EventEmitter<any>();
  @Output() deleteConfirm = new EventEmitter<any>();
  @Output() editConfirm = new EventEmitter<any>();
  @Output() createConfirm = new EventEmitter<any>();
  @Output() rowHover: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancelUpdate = new EventEmitter<any>();
  @Output() add = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<any>();
  @Output() refresh = new EventEmitter<any>();
  @Output() save = new EventEmitter<any>();
  @Output() changePage = new EventEmitter<any>();

  tableClass: string;
  tableId: string;
  isHideHeader: boolean;
  isHideSubHeader: boolean;
  isPagerDisplay: boolean;
  rowClassFunction: Function;
  isBottomAction: boolean;

  constructor(private validator: ValidatorService) { }


  grid: Grid;
  defaultSettings: Object = {
    mode: 'inline', // inline|external|click-to-edit
    selectMode: 'single', // single|multi
    hideHeader: false,
    hideSubHeader: false,
    actions: {
      columnTitle: 'Actions',
      add: false,
      edit: true,
      delete: true,
      custom: [],
      position: 'left', // left|right
    },
    bottomActions: {
      enabled: false,
      add: {
        enabled: false,
        content: 'Add'
      },
      save: {
        enabled: false,
        content: 'Save'
      },
      refresh: {
        enabled: false,
        content: 'Refresh'
      },
      cancel: {
        enabled: false,
        content: 'Cancel'
      }
    },
    filter: {
      inputClass: '',
    },
    edit: {
      inputClass: '',
      editButtonContent: 'Edit',
      saveButtonContent: 'Update',
      cancelButtonContent: 'Cancel',
      confirmSave: false,
    },
    add: {
      inputClass: '',
      addButtonContent: 'Add New',
      createButtonContent: 'Create',
      cancelButtonContent: 'Cancel',
      confirmCreate: false,
    },
    delete: {
      deleteButtonContent: 'Delete',
      confirmDelete: false,
    },
    attr: {
      id: '',
      class: '',
    },
    noDataMessage: 'No data found',
    columns: {},
    pager: {
      display: true,
      perPage: 10,
    },
    rowClassFunction: () => ""
  };

  isAllSelected: boolean = false;


  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    if (this.grid) {
      if (changes['settings']) {
        this.grid.setSettings(this.prepareSettings(), this.validator);
      }
      if (changes['source']) {
        this.source = this.prepareSource();
        this.grid.setSource(this.source);
      }
    } else {
      this.initGrid();
    }
    this.tableId = this.grid.getSetting('attr.id');
    this.tableClass = this.grid.getSetting('attr.class');
    this.isHideHeader = this.grid.getSetting('hideHeader');
    this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
    this.isBottomAction = this.grid.getSetting('bottomActions.enabled');
    this.isPagerDisplay = this.grid.getSetting('pager.display');
    this.rowClassFunction = this.grid.getSetting('rowClassFunction');
  }

  editRowSelect(row: Row) {
    if (this.grid.getSetting('selectMode') === 'multi') {
      this.onMultipleSelectRow(row);
    } else {
      this.onSelectRow(row);
    }
  }

  onUserSelectRow(row: Row) {
    if (this.grid.getSetting('selectMode') !== 'multi') {
      this.grid.selectRow(row);
      this.emitUserSelectRow(row);
      this.emitSelectRow(row);
    }
  }

  onRowHover(row: Row) {
    this.rowHover.emit(row);
  }

  multipleSelectRow(row: Row) {
    this.grid.multipleSelectRow(row);
    this.emitUserSelectRow(row);
    this.emitSelectRow(row);
  }

  onSelectAllRows($event: any) {
    this.isAllSelected = !this.isAllSelected;
    this.grid.selectAllRows(this.isAllSelected);

    this.emitUserSelectRow(null);
    this.emitSelectRow(null);
  }

  onSelectRow(row: Row) {
    this.grid.selectRow(row);
    this.emitSelectRow(row);
  }

  onMultipleSelectRow(row: Row) {
    this.emitSelectRow(row);
  }

  initGrid() {
    this.source = this.prepareSource();
    this.grid = new Grid(this.source, this.prepareSettings(), this.validator);
    this.grid.onSelectRow().subscribe((row) => this.emitSelectRow(row));
  }

  prepareSource(): DataSource {
    if (this.source instanceof DataSource) {
      return this.source;
    } else if (this.source instanceof Array) {
      return new LocalDataSource(this.source);
    }

    return new LocalDataSource();
  }

  prepareSettings(): Object {
    return deepExtend({}, this.defaultSettings, this.settings);
  }

  OnChangePage(event: any) {
    const deferred = new Deferred();
    this.resetAllSelector();
    deferred.promise.then((value) => {
      this.source.setPage(event.page);
    }).catch((err) => {
      // do nothing
    });
    this.changePage.emit({
      changePage: deferred,
      page: event.page,
    });
  }

  sort($event: any) {
    this.resetAllSelector();
  }

  filter($event: any) {
    this.resetAllSelector();
  }
  getColCount(): number {
    let count:number = this.grid.getColumns().length;

    if (this.grid.isActionsVisible) {
      count++;
    }
    return count;
  }
  /**
   * TODO: add functionality
   */
  onSave() {
    const rows = this.grid.getAllRecords();
    this.save.emit();
  }
  /**
   * TODO: add functionality
   */
  onCancel() {
    this.cancel.emit();
  }
  /**
   * TODO: add functionality
   */
  onRefresh() {
    this.refresh.emit();
  }
  /**
   * TODO: add functionality
   */
  onAdd(event: any) {
    const deferred = new Deferred();
    deferred.promise.then((value) => {
      this.grid.toggleSorting(false);
      this.grid.toggleFiltering(false);
    }).catch((err) => {
      this.grid.toggleSortingOnCancel();
      this.grid.toggleFilteringOnCancel();
      this.grid.enableEditDelete(event.data);
    });
    this.add.emit({
      index: event.index,
      data: event.data,
      source: this.source,
      add: deferred,
    });
    deferred.resolve();
  }

  onEdit(event: any) {
    const deferred = new Deferred();
    deferred.promise.then((value) => {
      this.grid.toggleSorting(false);
      this.grid.toggleFiltering(false);
    }).catch((err) => {
      this.grid.enableEditDelete(event.data);
    });
    this.edit.emit({
      index: event.index,
      data: event.data,
      source: this.source,
      edit: deferred,
    });
    deferred.resolve();
  }

  onDelete(event: any) {
    const deferred = new Deferred();
    deferred.promise.then((value) => {
      this.grid.toggleSorting(false);
      this.grid.toggleFiltering(false);
    }).catch((err) => {
      this.grid.enableEditDelete(event.data);
    });
    this.delete.emit({
      index: event.index,
      data: event.data,
      source: this.source,
      delete: deferred,
    });
    deferred.resolve();
  }

  onAddCancel(event: any) {
    this.grid.toggleSortingOnCancel();
    this.grid.toggleFilteringOnCancel();
  }

  private onCancelUpdate(event: any) {
    this.grid.toggleSortingOnCancel();
    this.grid.toggleFilteringOnCancel();
    this.cancelUpdate.emit(event);
    this.grid.deleteNewRow(event.data, event.index);
    
  }

  private resetAllSelector() {
    this.isAllSelected = false;
  }

  private emitUserSelectRow(row: Row) {
    const selectedRows = this.grid.getSelectedRows();

    this.userRowSelect.emit({
      data: row ? row.getData() : null,
      isSelected: row ? row.getIsSelected() : null,
      source: this.source,
      selected: selectedRows && selectedRows.length ? selectedRows.map((r: Row) => r.getData()) : [],
    });
  }

  private emitSelectRow(row: Row) {
    this.rowSelect.emit({
      data: row ? row.getData() : null,
      isSelected: row ? row.getIsSelected() : null,
      source: this.source,
    });
  }

}
