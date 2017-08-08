import { Component } from '@angular/core';

@Component({
  selector: 'basic-example',
  template: `
    <ng2-smart-table [settings]="settings" (delete)="onDelete($event)"></ng2-smart-table>
  `,
})
export class BasicExampleComponent {

  settings = {
    actions: {
      columnTitle: 'Actions',
      add: false,
      edit: true,
      delete: true,
      custom: [],
      position: 'left', // left|right
    },
    columns: {
      id: {
        title: 'ID',
        width: '100px',
      },
      name: {
        title: 'Full Name',
        width: '40%',
      },
      username: {
        title: 'User Name',
      },
      email: {
        title: 'Email',
      },
    },
  };

  onDelete(event: any) {
    console.log(event);
  }

}
