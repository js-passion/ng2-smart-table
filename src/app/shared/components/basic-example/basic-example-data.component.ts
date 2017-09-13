import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
@Component({
  selector: 'basic-example-data',
  template: `
    <ng2-smart-table
    [settings]="settings"
    [source]="data"
    (delete)="onDelete($event)"
    (edit)="onEdit($event)"
    (cancelUpdate)="onCancelUpdate($event)"
    (add)="onAdd($event)"
    (save)="onSave($event)"
    (refresh)="onRefresh($event)"
    (cancel)="onCancel($event)"
    (reissue)="onReissue($event)"
    (revoke)="onRevoke($event)"
    (undo)="onUndo($event)"
    (clear)="onClear($event)"
    (deleteAll)="onDeleteAll($event)"
    (transfer)="onTransfer($event)"
    (createPrtSet)="onCreatePrtSet($event)"
    (linkToPrtSet)="onLinkToPrtSet($event)"
    (back)="onBack($event)"
    (rowSelect)="onRowSelect($event)"
    (changePage)="onChangePage($event)"
    ></ng2-smart-table>
  `,
})
export class BasicExampleDataComponent {

  settings = {
    actions: {
      columnTitle: 'Actions',
      add: true,
      edit: true,
      delete: true,
      reissue : false,
      revoked : false,
      undo : false,
      custom: [],
      position: 'left', // left|right
    },
    bottomActions: {
      enabled: true,
      add: {
        enabled: true,
        content: 'Add New',
      },
    },
    mode: 'custom',
    columns: {
      id: {
        title: 'ID',
        validators: [Validators.required,
        Validators.minLength(1)
        ]
      },
      name: {
        title: 'Full Name',
      },
      username: {
        title: 'User Name',
      },
      email: {
        title: 'Email',
      },
    },
  };

  data = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz',
    },
    {
      id: 12,
      name: '12 Nicholas DuBuque',
      username: '12 Nicholas.Stanton',
      email: '12Rey.Padberg@rosamond.biz',
    },
    {
      id: 13,
      name: '13Nicholas DuBuque',
      username: '13Nicholas.Stanton',
      email: '13Rey.Padberg@rosamond.biz',
    },
    {
      id: 14,
      name: '14Nicholas DuBuque',
      username: '14Nicholas.Stanton',
      email: '14Rey.Padberg@rosamond.biz',
    },
    {
      id: 15,
      name: '15Nicholas DuBuque',
      username: '15Nicholas.Stanton',
      email: '15Rey.Padberg@rosamond.biz',
    },
    {
      id: 16,
      name: '16Nicholas DuBuque',
      username: '16Nicholas.Stanton',
      email: '16Rey.Padberg@rosamond.biz',
    },
    {
      id: 17,
      name: '17Nicholas DuBuque',
      username: '17Nicholas.Stanton',
      email: '17Rey.Padberg@rosamond.biz',
    },
    {
      id: 18,
      name: '18Nicholas DuBuque',
      username: '18Nicholas.Stanton',
      email: '18Rey.Padberg@rosamond.biz',
    },
    {
      id: 19,
      name: '19Nicholas DuBuque',
      username: '19Nicholas.Stanton',
      email: '19Rey.Padberg@rosamond.biz',
    },
    {
      id: 20,
      name: '20Nicholas DuBuque',
      username: '20Nicholas.Stanton',
      email: '20Rey.Padberg@rosamond.biz',
    },
    {
      id: 21,
      name: '21Nicholas DuBuque',
      username: '21Nicholas.Stanton',
      email: '21Rey.Padberg@rosamond.biz',
    },
    {
      id: 22,
      name: '22Nicholas DuBuque',
      username: '22Nicholas.Stanton',
      email: '22Rey.Padberg@rosamond.biz',
    },
    {
      id: 23,
      name: '23Nicholas DuBuque',
      username: '23Nicholas.Stanton',
      email: '23Rey.Padberg@rosamond.biz',
    },
    {
      id: 24,
      name: '24Nicholas DuBuque',
      username: '24Nicholas.Stanton',
      email: '24Rey.Padberg@rosamond.biz',
    },
    {
      id: 25,
      name: '25Nicholas DuBuque',
      username: '25Nicholas.Stanton',
      email: '25Rey.Padberg@rosamond.biz',
    },
    {
      id: 26,
      name: '26Nicholas DuBuque',
      username: '26Nicholas.Stanton',
      email: '26Rey.Padberg@rosamond.biz',
    },
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz',
    },
    {
      id: 12,
      name: '12 Nicholas DuBuque',
      username: '12 Nicholas.Stanton',
      email: '12Rey.Padberg@rosamond.biz',
    },
    {
      id: 13,
      name: '13Nicholas DuBuque',
      username: '13Nicholas.Stanton',
      email: '13Rey.Padberg@rosamond.biz',
    },
    {
      id: 14,
      name: '14Nicholas DuBuque',
      username: '14Nicholas.Stanton',
      email: '14Rey.Padberg@rosamond.biz',
    },
    {
      id: 15,
      name: '15Nicholas DuBuque',
      username: '15Nicholas.Stanton',
      email: '15Rey.Padberg@rosamond.biz',
    },
    {
      id: 16,
      name: '16Nicholas DuBuque',
      username: '16Nicholas.Stanton',
      email: '16Rey.Padberg@rosamond.biz',
    },
    {
      id: 17,
      name: '17Nicholas DuBuque',
      username: '17Nicholas.Stanton',
      email: '17Rey.Padberg@rosamond.biz',
    },
    {
      id: 18,
      name: '18Nicholas DuBuque',
      username: '18Nicholas.Stanton',
      email: '18Rey.Padberg@rosamond.biz',
    },
    {
      id: 19,
      name: '19Nicholas DuBuque',
      username: '19Nicholas.Stanton',
      email: '19Rey.Padberg@rosamond.biz',
    },
    {
      id: 20,
      name: '20Nicholas DuBuque',
      username: '20Nicholas.Stanton',
      email: '20Rey.Padberg@rosamond.biz',
    },
    {
      id: 21,
      name: '21Nicholas DuBuque',
      username: '21Nicholas.Stanton',
      email: '21Rey.Padberg@rosamond.biz',
    },
    {
      id: 22,
      name: '22Nicholas DuBuque',
      username: '22Nicholas.Stanton',
      email: '22Rey.Padberg@rosamond.biz',
    },
    {
      id: 23,
      name: '23Nicholas DuBuque',
      username: '23Nicholas.Stanton',
      email: '23Rey.Padberg@rosamond.biz',
    },
    {
      id: 24,
      name: '24Nicholas DuBuque',
      username: '24Nicholas.Stanton',
      email: '24Rey.Padberg@rosamond.biz',
    },
    {
      id: 25,
      name: '25Nicholas DuBuque',
      username: '25Nicholas.Stanton',
      email: '25Rey.Padberg@rosamond.biz',
    },
    {
      id: 26,
      name: '26Nicholas DuBuque',
      username: '26Nicholas.Stanton',
      email: '26Rey.Padberg@rosamond.biz',
    },
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz',
    },
    {
      id: 12,
      name: '12 Nicholas DuBuque',
      username: '12 Nicholas.Stanton',
      email: '12Rey.Padberg@rosamond.biz',
    },
    {
      id: 13,
      name: '13Nicholas DuBuque',
      username: '13Nicholas.Stanton',
      email: '13Rey.Padberg@rosamond.biz',
    },
    {
      id: 14,
      name: '14Nicholas DuBuque',
      username: '14Nicholas.Stanton',
      email: '14Rey.Padberg@rosamond.biz',
    },
    {
      id: 15,
      name: '15Nicholas DuBuque',
      username: '15Nicholas.Stanton',
      email: '15Rey.Padberg@rosamond.biz',
    },
    {
      id: 16,
      name: '16Nicholas DuBuque',
      username: '16Nicholas.Stanton',
      email: '16Rey.Padberg@rosamond.biz',
    },
    {
      id: 17,
      name: '17Nicholas DuBuque',
      username: '17Nicholas.Stanton',
      email: '17Rey.Padberg@rosamond.biz',
    },
    {
      id: 18,
      name: '18Nicholas DuBuque',
      username: '18Nicholas.Stanton',
      email: '18Rey.Padberg@rosamond.biz',
    },
    {
      id: 19,
      name: '19Nicholas DuBuque',
      username: '19Nicholas.Stanton',
      email: '19Rey.Padberg@rosamond.biz',
    },
    {
      id: 20,
      name: '20Nicholas DuBuque',
      username: '20Nicholas.Stanton',
      email: '20Rey.Padberg@rosamond.biz',
    },
    {
      id: 21,
      name: '21Nicholas DuBuque',
      username: '21Nicholas.Stanton',
      email: '21Rey.Padberg@rosamond.biz',
    },
    {
      id: 22,
      name: '22Nicholas DuBuque',
      username: '22Nicholas.Stanton',
      email: '22Rey.Padberg@rosamond.biz',
    },
    {
      id: 23,
      name: '23Nicholas DuBuque',
      username: '23Nicholas.Stanton',
      email: '23Rey.Padberg@rosamond.biz',
    },
    {
      id: 24,
      name: '24Nicholas DuBuque',
      username: '24Nicholas.Stanton',
      email: '24Rey.Padberg@rosamond.biz',
    },
    {
      id: 25,
      name: '25Nicholas DuBuque',
      username: '25Nicholas.Stanton',
      email: '25Rey.Padberg@rosamond.biz',
    },
    {
      id: 26,
      name: '26Nicholas DuBuque',
      username: '26Nicholas.Stanton',
      email: '26Rey.Padberg@rosamond.biz',
    },
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz',
    },
    {
      id: 12,
      name: '12 Nicholas DuBuque',
      username: '12 Nicholas.Stanton',
      email: '12Rey.Padberg@rosamond.biz',
    },
    {
      id: 13,
      name: '13Nicholas DuBuque',
      username: '13Nicholas.Stanton',
      email: '13Rey.Padberg@rosamond.biz',
    },
    {
      id: 14,
      name: '14Nicholas DuBuque',
      username: '14Nicholas.Stanton',
      email: '14Rey.Padberg@rosamond.biz',
    },
    {
      id: 15,
      name: '15Nicholas DuBuque',
      username: '15Nicholas.Stanton',
      email: '15Rey.Padberg@rosamond.biz',
    },
    {
      id: 16,
      name: '16Nicholas DuBuque',
      username: '16Nicholas.Stanton',
      email: '16Rey.Padberg@rosamond.biz',
    },
    {
      id: 17,
      name: '17Nicholas DuBuque',
      username: '17Nicholas.Stanton',
      email: '17Rey.Padberg@rosamond.biz',
    },
    {
      id: 18,
      name: '18Nicholas DuBuque',
      username: '18Nicholas.Stanton',
      email: '18Rey.Padberg@rosamond.biz',
    },
    {
      id: 19,
      name: '19Nicholas DuBuque',
      username: '19Nicholas.Stanton',
      email: '19Rey.Padberg@rosamond.biz',
    },
    {
      id: 20,
      name: '20Nicholas DuBuque',
      username: '20Nicholas.Stanton',
      email: '20Rey.Padberg@rosamond.biz',
    },
    {
      id: 21,
      name: '21Nicholas DuBuque',
      username: '21Nicholas.Stanton',
      email: '21Rey.Padberg@rosamond.biz',
    },
    {
      id: 22,
      name: '22Nicholas DuBuque',
      username: '22Nicholas.Stanton',
      email: '22Rey.Padberg@rosamond.biz',
    },
    {
      id: 23,
      name: '23Nicholas DuBuque',
      username: '23Nicholas.Stanton',
      email: '23Rey.Padberg@rosamond.biz',
    },
    {
      id: 24,
      name: '24Nicholas DuBuque',
      username: '24Nicholas.Stanton',
      email: '24Rey.Padberg@rosamond.biz',
    },
    {
      id: 25,
      name: '25Nicholas DuBuque',
      username: '25Nicholas.Stanton',
      email: '25Rey.Padberg@rosamond.biz',
    },
    {
      id: 26,
      name: '26Nicholas DuBuque',
      username: '26Nicholas.Stanton',
      email: '26Rey.Padberg@rosamond.biz',
    },
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz',
    },
    {
      id: 12,
      name: '12 Nicholas DuBuque',
      username: '12 Nicholas.Stanton',
      email: '12Rey.Padberg@rosamond.biz',
    },
    {
      id: 13,
      name: '13Nicholas DuBuque',
      username: '13Nicholas.Stanton',
      email: '13Rey.Padberg@rosamond.biz',
    },
    {
      id: 14,
      name: '14Nicholas DuBuque',
      username: '14Nicholas.Stanton',
      email: '14Rey.Padberg@rosamond.biz',
    },
    {
      id: 15,
      name: '15Nicholas DuBuque',
      username: '15Nicholas.Stanton',
      email: '15Rey.Padberg@rosamond.biz',
    },
    {
      id: 16,
      name: '16Nicholas DuBuque',
      username: '16Nicholas.Stanton',
      email: '16Rey.Padberg@rosamond.biz',
    },
    {
      id: 17,
      name: '17Nicholas DuBuque',
      username: '17Nicholas.Stanton',
      email: '17Rey.Padberg@rosamond.biz',
    },
    {
      id: 18,
      name: '18Nicholas DuBuque',
      username: '18Nicholas.Stanton',
      email: '18Rey.Padberg@rosamond.biz',
    },
    {
      id: 19,
      name: '19Nicholas DuBuque',
      username: '19Nicholas.Stanton',
      email: '19Rey.Padberg@rosamond.biz',
    },
    {
      id: 20,
      name: '20Nicholas DuBuque',
      username: '20Nicholas.Stanton',
      email: '20Rey.Padberg@rosamond.biz',
    },
    {
      id: 21,
      name: '21Nicholas DuBuque',
      username: '21Nicholas.Stanton',
      email: '21Rey.Padberg@rosamond.biz',
    },
    {
      id: 22,
      name: '22Nicholas DuBuque',
      username: '22Nicholas.Stanton',
      email: '22Rey.Padberg@rosamond.biz',
    },
    {
      id: 23,
      name: '23Nicholas DuBuque',
      username: '23Nicholas.Stanton',
      email: '23Rey.Padberg@rosamond.biz',
    },
    {
      id: 24,
      name: '24Nicholas DuBuque',
      username: '24Nicholas.Stanton',
      email: '24Rey.Padberg@rosamond.biz',
    },
    {
      id: 25,
      name: '25Nicholas DuBuque',
      username: '25Nicholas.Stanton',
      email: '25Rey.Padberg@rosamond.biz',
    },
    {
      id: 26,
      name: '26Nicholas DuBuque',
      username: '26Nicholas.Stanton',
      email: '26Rey.Padberg@rosamond.biz',
    },
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz',
    },
    {
      id: 12,
      name: '12 Nicholas DuBuque',
      username: '12 Nicholas.Stanton',
      email: '12Rey.Padberg@rosamond.biz',
    },
    {
      id: 13,
      name: '13Nicholas DuBuque',
      username: '13Nicholas.Stanton',
      email: '13Rey.Padberg@rosamond.biz',
    },
    {
      id: 14,
      name: '14Nicholas DuBuque',
      username: '14Nicholas.Stanton',
      email: '14Rey.Padberg@rosamond.biz',
    },
    {
      id: 15,
      name: '15Nicholas DuBuque',
      username: '15Nicholas.Stanton',
      email: '15Rey.Padberg@rosamond.biz',
    },
    {
      id: 16,
      name: '16Nicholas DuBuque',
      username: '16Nicholas.Stanton',
      email: '16Rey.Padberg@rosamond.biz',
    },
    {
      id: 17,
      name: '17Nicholas DuBuque',
      username: '17Nicholas.Stanton',
      email: '17Rey.Padberg@rosamond.biz',
    },
    {
      id: 18,
      name: '18Nicholas DuBuque',
      username: '18Nicholas.Stanton',
      email: '18Rey.Padberg@rosamond.biz',
    },
    {
      id: 19,
      name: '19Nicholas DuBuque',
      username: '19Nicholas.Stanton',
      email: '19Rey.Padberg@rosamond.biz',
    },
    {
      id: 20,
      name: '20Nicholas DuBuque',
      username: '20Nicholas.Stanton',
      email: '20Rey.Padberg@rosamond.biz',
    },
    {
      id: 21,
      name: '21Nicholas DuBuque',
      username: '21Nicholas.Stanton',
      email: '21Rey.Padberg@rosamond.biz',
    },
    {
      id: 22,
      name: '22Nicholas DuBuque',
      username: '22Nicholas.Stanton',
      email: '22Rey.Padberg@rosamond.biz',
    },
    {
      id: 23,
      name: '23Nicholas DuBuque',
      username: '23Nicholas.Stanton',
      email: '23Rey.Padberg@rosamond.biz',
    },
    {
      id: 24,
      name: '24Nicholas DuBuque',
      username: '24Nicholas.Stanton',
      email: '24Rey.Padberg@rosamond.biz',
    },
    {
      id: 25,
      name: '25Nicholas DuBuque',
      username: '25Nicholas.Stanton',
      email: '25Rey.Padberg@rosamond.biz',
    },
    {
      id: 26,
      name: '26Nicholas DuBuque',
      username: '26Nicholas.Stanton',
      email: '26Rey.Padberg@rosamond.biz',
    },
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz',
    },
    {
      id: 12,
      name: '12 Nicholas DuBuque',
      username: '12 Nicholas.Stanton',
      email: '12Rey.Padberg@rosamond.biz',
    },
    {
      id: 13,
      name: '13Nicholas DuBuque',
      username: '13Nicholas.Stanton',
      email: '13Rey.Padberg@rosamond.biz',
    },
    {
      id: 14,
      name: '14Nicholas DuBuque',
      username: '14Nicholas.Stanton',
      email: '14Rey.Padberg@rosamond.biz',
    },
    {
      id: 15,
      name: '15Nicholas DuBuque',
      username: '15Nicholas.Stanton',
      email: '15Rey.Padberg@rosamond.biz',
    },
    {
      id: 16,
      name: '16Nicholas DuBuque',
      username: '16Nicholas.Stanton',
      email: '16Rey.Padberg@rosamond.biz',
    },
    {
      id: 17,
      name: '17Nicholas DuBuque',
      username: '17Nicholas.Stanton',
      email: '17Rey.Padberg@rosamond.biz',
    },
    {
      id: 18,
      name: '18Nicholas DuBuque',
      username: '18Nicholas.Stanton',
      email: '18Rey.Padberg@rosamond.biz',
    },
    {
      id: 19,
      name: '19Nicholas DuBuque',
      username: '19Nicholas.Stanton',
      email: '19Rey.Padberg@rosamond.biz',
    },
    {
      id: 20,
      name: '20Nicholas DuBuque',
      username: '20Nicholas.Stanton',
      email: '20Rey.Padberg@rosamond.biz',
    },
    {
      id: 21,
      name: '21Nicholas DuBuque',
      username: '21Nicholas.Stanton',
      email: '21Rey.Padberg@rosamond.biz',
    },
    {
      id: 22,
      name: '22Nicholas DuBuque',
      username: '22Nicholas.Stanton',
      email: '22Rey.Padberg@rosamond.biz',
    },
    {
      id: 23,
      name: '23Nicholas DuBuque',
      username: '23Nicholas.Stanton',
      email: '23Rey.Padberg@rosamond.biz',
    },
    {
      id: 24,
      name: '24Nicholas DuBuque',
      username: '24Nicholas.Stanton',
      email: '24Rey.Padberg@rosamond.biz',
    },
    {
      id: 25,
      name: '25Nicholas DuBuque',
      username: '25Nicholas.Stanton',
      email: '25Rey.Padberg@rosamond.biz',
    },
    {
      id: 26,
      name: '26Nicholas DuBuque',
      username: '26Nicholas.Stanton',
      email: '26Rey.Padberg@rosamond.biz',
    },
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz',
    },
    {
      id: 12,
      name: '12 Nicholas DuBuque',
      username: '12 Nicholas.Stanton',
      email: '12Rey.Padberg@rosamond.biz',
    },
    {
      id: 13,
      name: '13Nicholas DuBuque',
      username: '13Nicholas.Stanton',
      email: '13Rey.Padberg@rosamond.biz',
    },
    {
      id: 14,
      name: '14Nicholas DuBuque',
      username: '14Nicholas.Stanton',
      email: '14Rey.Padberg@rosamond.biz',
    },
    {
      id: 15,
      name: '15Nicholas DuBuque',
      username: '15Nicholas.Stanton',
      email: '15Rey.Padberg@rosamond.biz',
    },
    {
      id: 16,
      name: '16Nicholas DuBuque',
      username: '16Nicholas.Stanton',
      email: '16Rey.Padberg@rosamond.biz',
    },
    {
      id: 17,
      name: '17Nicholas DuBuque',
      username: '17Nicholas.Stanton',
      email: '17Rey.Padberg@rosamond.biz',
    },
    {
      id: 18,
      name: '18Nicholas DuBuque',
      username: '18Nicholas.Stanton',
      email: '18Rey.Padberg@rosamond.biz',
    },
    {
      id: 19,
      name: '19Nicholas DuBuque',
      username: '19Nicholas.Stanton',
      email: '19Rey.Padberg@rosamond.biz',
    },
    {
      id: 20,
      name: '20Nicholas DuBuque',
      username: '20Nicholas.Stanton',
      email: '20Rey.Padberg@rosamond.biz',
    },
    {
      id: 21,
      name: '21Nicholas DuBuque',
      username: '21Nicholas.Stanton',
      email: '21Rey.Padberg@rosamond.biz',
    },
    {
      id: 22,
      name: '22Nicholas DuBuque',
      username: '22Nicholas.Stanton',
      email: '22Rey.Padberg@rosamond.biz',
    },
    {
      id: 23,
      name: '23Nicholas DuBuque',
      username: '23Nicholas.Stanton',
      email: '23Rey.Padberg@rosamond.biz',
    },
    {
      id: 24,
      name: '24Nicholas DuBuque',
      username: '24Nicholas.Stanton',
      email: '24Rey.Padberg@rosamond.biz',
    },
    {
      id: 25,
      name: '25Nicholas DuBuque',
      username: '25Nicholas.Stanton',
      email: '25Rey.Padberg@rosamond.biz',
    },
    {
      id: 26,
      name: '26Nicholas DuBuque',
      username: '26Nicholas.Stanton',
      email: '26Rey.Padberg@rosamond.biz',
    },
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz',
    },
    {
      id: 12,
      name: '12 Nicholas DuBuque',
      username: '12 Nicholas.Stanton',
      email: '12Rey.Padberg@rosamond.biz',
    },
    {
      id: 13,
      name: '13Nicholas DuBuque',
      username: '13Nicholas.Stanton',
      email: '13Rey.Padberg@rosamond.biz',
    },
    {
      id: 14,
      name: '14Nicholas DuBuque',
      username: '14Nicholas.Stanton',
      email: '14Rey.Padberg@rosamond.biz',
    },
    {
      id: 15,
      name: '15Nicholas DuBuque',
      username: '15Nicholas.Stanton',
      email: '15Rey.Padberg@rosamond.biz',
    },
    {
      id: 16,
      name: '16Nicholas DuBuque',
      username: '16Nicholas.Stanton',
      email: '16Rey.Padberg@rosamond.biz',
    },
    {
      id: 17,
      name: '17Nicholas DuBuque',
      username: '17Nicholas.Stanton',
      email: '17Rey.Padberg@rosamond.biz',
    },
    {
      id: 18,
      name: '18Nicholas DuBuque',
      username: '18Nicholas.Stanton',
      email: '18Rey.Padberg@rosamond.biz',
    },
    {
      id: 19,
      name: '19Nicholas DuBuque',
      username: '19Nicholas.Stanton',
      email: '19Rey.Padberg@rosamond.biz',
    },
    {
      id: 20,
      name: '20Nicholas DuBuque',
      username: '20Nicholas.Stanton',
      email: '20Rey.Padberg@rosamond.biz',
    },
    {
      id: 21,
      name: '21Nicholas DuBuque',
      username: '21Nicholas.Stanton',
      email: '21Rey.Padberg@rosamond.biz',
    },
    {
      id: 22,
      name: '22Nicholas DuBuque',
      username: '22Nicholas.Stanton',
      email: '22Rey.Padberg@rosamond.biz',
    },
    {
      id: 23,
      name: '23Nicholas DuBuque',
      username: '23Nicholas.Stanton',
      email: '23Rey.Padberg@rosamond.biz',
    },
    {
      id: 24,
      name: '24Nicholas DuBuque',
      username: '24Nicholas.Stanton',
      email: '24Rey.Padberg@rosamond.biz',
    },
    {
      id: 25,
      name: '25Nicholas DuBuque',
      username: '25Nicholas.Stanton',
      email: '25Rey.Padberg@rosamond.biz',
    },
    {
      id: 26,
      name: '26Nicholas DuBuque',
      username: '26Nicholas.Stanton',
      email: '26Rey.Padberg@rosamond.biz',
    },
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz',
    },
    {
      id: 12,
      name: '12 Nicholas DuBuque',
      username: '12 Nicholas.Stanton',
      email: '12Rey.Padberg@rosamond.biz',
    },
    {
      id: 13,
      name: '13Nicholas DuBuque',
      username: '13Nicholas.Stanton',
      email: '13Rey.Padberg@rosamond.biz',
    },
    {
      id: 14,
      name: '14Nicholas DuBuque',
      username: '14Nicholas.Stanton',
      email: '14Rey.Padberg@rosamond.biz',
    },
    {
      id: 15,
      name: '15Nicholas DuBuque',
      username: '15Nicholas.Stanton',
      email: '15Rey.Padberg@rosamond.biz',
    },
    {
      id: 16,
      name: '16Nicholas DuBuque',
      username: '16Nicholas.Stanton',
      email: '16Rey.Padberg@rosamond.biz',
    },
    {
      id: 17,
      name: '17Nicholas DuBuque',
      username: '17Nicholas.Stanton',
      email: '17Rey.Padberg@rosamond.biz',
    },
    {
      id: 18,
      name: '18Nicholas DuBuque',
      username: '18Nicholas.Stanton',
      email: '18Rey.Padberg@rosamond.biz',
    },
    {
      id: 19,
      name: '19Nicholas DuBuque',
      username: '19Nicholas.Stanton',
      email: '19Rey.Padberg@rosamond.biz',
    },
    {
      id: 20,
      name: '20Nicholas DuBuque',
      username: '20Nicholas.Stanton',
      email: '20Rey.Padberg@rosamond.biz',
    },
    {
      id: 21,
      name: '21Nicholas DuBuque',
      username: '21Nicholas.Stanton',
      email: '21Rey.Padberg@rosamond.biz',
    },
    {
      id: 22,
      name: '22Nicholas DuBuque',
      username: '22Nicholas.Stanton',
      email: '22Rey.Padberg@rosamond.biz',
    },
    {
      id: 23,
      name: '23Nicholas DuBuque',
      username: '23Nicholas.Stanton',
      email: '23Rey.Padberg@rosamond.biz',
    },
    {
      id: 24,
      name: '24Nicholas DuBuque',
      username: '24Nicholas.Stanton',
      email: '24Rey.Padberg@rosamond.biz',
    },
    {
      id: 25,
      name: '25Nicholas DuBuque',
      username: '25Nicholas.Stanton',
      email: '25Rey.Padberg@rosamond.biz',
    },
    {
      id: 26,
      name: '26Nicholas DuBuque',
      username: '26Nicholas.Stanton',
      email: '26Rey.Padberg@rosamond.biz',
    },
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz',
    },
    {
      id: 12,
      name: '12 Nicholas DuBuque',
      username: '12 Nicholas.Stanton',
      email: '12Rey.Padberg@rosamond.biz',
    },
    {
      id: 13,
      name: '13Nicholas DuBuque',
      username: '13Nicholas.Stanton',
      email: '13Rey.Padberg@rosamond.biz',
    },
    {
      id: 14,
      name: '14Nicholas DuBuque',
      username: '14Nicholas.Stanton',
      email: '14Rey.Padberg@rosamond.biz',
    },
    {
      id: 15,
      name: '15Nicholas DuBuque',
      username: '15Nicholas.Stanton',
      email: '15Rey.Padberg@rosamond.biz',
    },
    {
      id: 16,
      name: '16Nicholas DuBuque',
      username: '16Nicholas.Stanton',
      email: '16Rey.Padberg@rosamond.biz',
    },
    {
      id: 17,
      name: '17Nicholas DuBuque',
      username: '17Nicholas.Stanton',
      email: '17Rey.Padberg@rosamond.biz',
    },
    {
      id: 18,
      name: '18Nicholas DuBuque',
      username: '18Nicholas.Stanton',
      email: '18Rey.Padberg@rosamond.biz',
    },
    {
      id: 19,
      name: '19Nicholas DuBuque',
      username: '19Nicholas.Stanton',
      email: '19Rey.Padberg@rosamond.biz',
    },
    {
      id: 20,
      name: '20Nicholas DuBuque',
      username: '20Nicholas.Stanton',
      email: '20Rey.Padberg@rosamond.biz',
    },
    {
      id: 21,
      name: '21Nicholas DuBuque',
      username: '21Nicholas.Stanton',
      email: '21Rey.Padberg@rosamond.biz',
    },
    {
      id: 22,
      name: '22Nicholas DuBuque',
      username: '22Nicholas.Stanton',
      email: '22Rey.Padberg@rosamond.biz',
    },
    {
      id: 23,
      name: '23Nicholas DuBuque',
      username: '23Nicholas.Stanton',
      email: '23Rey.Padberg@rosamond.biz',
    },
    {
      id: 24,
      name: '24Nicholas DuBuque',
      username: '24Nicholas.Stanton',
      email: '24Rey.Padberg@rosamond.biz',
    },
    {
      id: 25,
      name: '25Nicholas DuBuque',
      username: '25Nicholas.Stanton',
      email: '25Rey.Padberg@rosamond.biz',
    },
    {
      id: 26,
      name: '26Nicholas DuBuque',
      username: '26Nicholas.Stanton',
      email: '26Rey.Padberg@rosamond.biz',
    },
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz',
    },
    {
      id: 12,
      name: '12 Nicholas DuBuque',
      username: '12 Nicholas.Stanton',
      email: '12Rey.Padberg@rosamond.biz',
    },
    {
      id: 13,
      name: '13Nicholas DuBuque',
      username: '13Nicholas.Stanton',
      email: '13Rey.Padberg@rosamond.biz',
    },
    {
      id: 14,
      name: '14Nicholas DuBuque',
      username: '14Nicholas.Stanton',
      email: '14Rey.Padberg@rosamond.biz',
    },
    {
      id: 15,
      name: '15Nicholas DuBuque',
      username: '15Nicholas.Stanton',
      email: '15Rey.Padberg@rosamond.biz',
    },
    {
      id: 16,
      name: '16Nicholas DuBuque',
      username: '16Nicholas.Stanton',
      email: '16Rey.Padberg@rosamond.biz',
    },
    {
      id: 17,
      name: '17Nicholas DuBuque',
      username: '17Nicholas.Stanton',
      email: '17Rey.Padberg@rosamond.biz',
    },
    {
      id: 18,
      name: '18Nicholas DuBuque',
      username: '18Nicholas.Stanton',
      email: '18Rey.Padberg@rosamond.biz',
    },
    {
      id: 19,
      name: '19Nicholas DuBuque',
      username: '19Nicholas.Stanton',
      email: '19Rey.Padberg@rosamond.biz',
    },
    {
      id: 20,
      name: '20Nicholas DuBuque',
      username: '20Nicholas.Stanton',
      email: '20Rey.Padberg@rosamond.biz',
    },
    {
      id: 21,
      name: '21Nicholas DuBuque',
      username: '21Nicholas.Stanton',
      email: '21Rey.Padberg@rosamond.biz',
    },
    {
      id: 22,
      name: '22Nicholas DuBuque',
      username: '22Nicholas.Stanton',
      email: '22Rey.Padberg@rosamond.biz',
    },
    {
      id: 23,
      name: '23Nicholas DuBuque',
      username: '23Nicholas.Stanton',
      email: '23Rey.Padberg@rosamond.biz',
    },
    {
      id: 24,
      name: '24Nicholas DuBuque',
      username: '24Nicholas.Stanton',
      email: '24Rey.Padberg@rosamond.biz',
    },
    {
      id: 25,
      name: '25Nicholas DuBuque',
      username: '25Nicholas.Stanton',
      email: '25Rey.Padberg@rosamond.biz',
    },
    {
      id: 26,
      name: '26Nicholas DuBuque',
      username: '26Nicholas.Stanton',
      email: '26Rey.Padberg@rosamond.biz',
    },
  ];

  onDelete(event) {
    console.log(event);
    if (window.confirm('Are you sure you want to delete?')) {
      event.delete.resolve();
    } else {
      event.delete.reject();
    }
  }
  onEdit(event) {
    console.log(event);
    if (event && event.mode === 'edit') {
      console.log(event.data.name);
      // do something
    } else {
      if (window.confirm('Are you sure you want to Edit?')) {
        event.edit.resolve();
      } else {
        event.edit.reject();
      }
    }
  }

  onReissue(event) {
    console.log(event);
    if (window.confirm('Are you sure you want to reissue?')) {
      event.reissue.resolve();
    } else {
      event.reissue.reject();
    }
  }

  onRevoke(event) {
    console.log(event);
    if (window.confirm('Are you sure you want to revoke?')) {
      event.revoke.resolve();
    } else {
      event.revoke.reject();
    }
  }

  onUndo(event) {
    console.log(event);
    if (window.confirm('Are you sure you want to undo?')) {
      event.undo.resolve();
    } else {
      event.undo.reject();
    }
  }

  onClear(event) {
    if (window.confirm('Are you sure you want to clear?')) {
      event.undo.resolve();
    } else {
      event.undo.reject();
    }
  }
  onDeleteAll(event) {
    if (window.confirm('Are you sure you want to deleteall?')) {
      event.undo.resolve();
    } else {
      event.undo.reject();
    }
  }
  onTransfer(event) {
    if (window.confirm('Are you sure you want to transfer?')) {
      event.undo.resolve();
    } else {
      event.undo.reject();
    }
  }
  onCreatePrtSet(event) {
    if (window.confirm('Are you sure you want to CreatePrtSet?')) {
      event.undo.resolve();
    } else {
      event.undo.reject();
    }
  }
  onLinkToPrtSet(event) {
    if (window.confirm('Are you sure you want to LinkToPrtSet?')) {
      event.undo.resolve();
    } else {
      event.undo.reject();
    }
  }
  onBack(event) {
    if (window.confirm('Are you sure you want to go back?')) {
      event.undo.resolve();
    } else {
      event.undo.reject();
    }
  }



  onCancelUpdate(event) {
    console.log(event);
  }

  onAdd(event) {
    console.log(event);
    alert('add clicked');
  }
  onCancel(event) {
    console.log(event);
    alert('add clicked');

  }
  onSave(event) {
    console.log(event);
    alert('add clicked');

  }
  onRefresh(event) {
    console.log(event);
    alert('add clicked');
  }
  onRowSelect(event) {
    console.log(event);
  }

  onChangePage(event) {
    if (window.confirm('Are you sure you want to Navigate?')) {
      event.changePage.resolve();
    } else {
      event.changePage.reject();
    }
  }

}
