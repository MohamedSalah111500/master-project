import { Component, ViewChild, OnInit } from '@angular/core';
import { GetXhrService } from 'src/app/core/services/GetXHR/get-xhr.service';
import { Alert, Alerts } from 'src/shared/interfaces/alert.inferface';
import { AlertService } from '../../services/alert.service';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  showLoader: boolean = false;
  filters = [
    {
      id: '2',
      name: 'All Alerts',
    },
    {
      id: '1',
      name: 'Ongoing Alerts',
    },
    {
      id: '0',
      name: 'Successes Alerts',
    },
  ];
  loading: boolean = false;
  alerts: Alert[] = [];
  activeTab = '0';
  activeAlert!: Alert;

  constructor(public _alertService: AlertService) {}
  ngOnInit(): void {
    this.getAllDrivers();
  }

  getAllDrivers() {
    this.loading = true;
    this._alertService.getAllDrivers().subscribe(
      (res) => {
        this.alerts = res.list;
        this.loading = false;
        this.activeAlert = res.list[0];
      },
      () => {},
      () => {}
    );
  }

  filter(filterText: string | number) {
    this.showLoader = true;
    switch (filterText) {
      case '0':
        this.activeTab = '0';
        break;
      case '1':
        this.activeTab = '1';
        break;
      case '2':
        this.activeTab = '2';
        break;

      default:
        break;
    }
  }

  selectedAlert(alert: Alert) {
    let newActiveAlert = this.alerts.find((item) => item.id === alert.id);
    if (newActiveAlert) {
      this.activeAlert = newActiveAlert;
    }
  }
}
