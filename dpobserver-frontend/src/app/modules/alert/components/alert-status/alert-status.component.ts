import { Component, Input } from '@angular/core';

@Component({
  selector: 'alert-status',
  templateUrl: './alert-status.component.html',
  styleUrls: ['./alert-status.component.scss'],
})
export class AlertStatus {
  @Input() status: number = 0;
  @Input() progress: number = 2;
  @Input() svg: string = 'false';

  isLoggedIn = false;
}
