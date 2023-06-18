import { Component, Input, OnInit } from '@angular/core';
import { Alert } from 'src/shared/interfaces/alert.inferface';

@Component({
  selector: 'alert-details',
  templateUrl: './alert-details.component.html',
  styleUrls: ['./alert-details.component.scss'],
})
export class AlertDetailsComponent implements OnInit {
  @Input() alert: any;
  patrols = [
    { name: 'Qesm Office', status: 'ready' },
    { name: 'Point 2', status: 'ready' },
    { name: 'Qesm Tow', status: 'ready' },
    { name: 'Point 3', status: 'ready' },
    { name: 'Point 4', status: 'ready' },
    { name: 'Point 2', status: 'ready' },
    { name: 'Point 2', status: 'ready' },
  ];
  ngOnInit() {
  }
}
