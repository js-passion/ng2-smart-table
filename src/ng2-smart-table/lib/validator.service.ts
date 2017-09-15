import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export abstract class ValidatorService {
    notify = new Subject<any>();
    notifyObservable$ = this.notify.asObservable();
    abstract getFormGroup(): FormGroup;
    abstract notifyOther(data: any) : boolean; 
}
