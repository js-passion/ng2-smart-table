import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidatorService } from './validator.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DefaultValidatorService implements ValidatorService {
     notify = new Subject<any>();
    notifyObservable$ = this.notify.asObservable();

    getFormGroup(): FormGroup {
        return new FormGroup({});

    }

    notifyOther(data: any) {
        if (data) {
            this.notify.next(data);
        }
    }
}
