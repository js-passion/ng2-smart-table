import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { DataSource } from '../../lib/data-source/data-source';
import { ValidatorService } from '../../lib/validator.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'ng2-smart-table-pager',
  styleUrls: ['./pager.component.scss'],
  templateUrl: './pager.component.html',
})
export class PagerComponent implements OnChanges ,OnInit{

  @Input() source: DataSource;
  @Input() pageNumber: number;
  @Output() changePage = new EventEmitter<any>();

  protected pages: Array<any>;
  protected page: number;
  protected count: number = 0;
  protected perPage: number;
  private subscription: Subscription;
  control : FormControl;

  protected dataChangedSub: Subscription;
  constructor(private validator: ValidatorService){
    this.control = new FormControl([]); 
  }

  ngOnInit(){
    this.subscription = this.validator.notifyObservable$.subscribe((page) => {
      if(page !== -1){
        this.page = page;
        this.control.setValue(page);
      }else{
        this.control.setValue(this.page);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.source) {
      if (!changes.source.firstChange) {
        this.dataChangedSub.unsubscribe();
      }
      this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
        this.page = this.source.getPaging().page;
        this.perPage = this.source.getPaging().perPage;
        this.count = this.source.count();
        this.control.setValue(this.page);
        if (this.isPageOutOfBounce()) {
          this.source.setPage(--this.page);
        }
        this.processPageChange(dataChanges);
        this.initPages();
      });
    }
  }

  /**
   * We change the page here depending on the action performed against data source
   * if a new element was added to the end of the table - then change the page to the last
   * if a new element was added to the beginning of the table - then to the first page
   * @param changes
   */
  processPageChange(changes: any) {
    // if (changes['action'] === 'prepend') {
    //   this.source.setPage(1);
    // }
    // if (changes['action'] === 'append') {
    //   this.source.setPage(this.getLast());
    // }
  }

  shouldShow(): boolean {
    // return this.source.count() > this.perPage;
    // always show
    return true;
  }

  paginate(page: number): boolean {
    this.changePage.emit({ page });
    return false;
  }

  getPage(): number {
    return this.page;
  }

  getPages(): Array<any> {
    return this.pages;
  }

  getPageCount(): number {
    if (this.pages) {
      return this.pages.length;
    }
    return 0;
  }

  getLast(): number {
    return Math.ceil(this.count / this.perPage);
  }

  getNextPage(): number {
    return this.getPage() + 1;
  }

  getPreviousPage(): number {
    return this.getPage() - 1;
  }

  isPageOutOfBounce(): boolean {
    return (this.page * this.perPage) >= (this.count + this.perPage) && this.page > 1;
  }

  initPages() {
    const pagesCount = this.getLast();
    let showPagesCount = 400;
    showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
    this.pages = [];

    if (this.shouldShow()) {

      let middleOne = Math.ceil(showPagesCount / 2);
      middleOne = this.page >= middleOne ? this.page : middleOne;

      let lastOne = middleOne + Math.floor(showPagesCount / 2);
      lastOne = lastOne >= pagesCount ? pagesCount : lastOne;

      const firstOne = lastOne - showPagesCount + 1;

      for (let i = firstOne; i <= lastOne; i++) {
        this.pages.push(i);
      }
    }
  }
}
