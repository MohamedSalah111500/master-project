import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ALERT_LIST } from 'src/app/core/constans/urls';
import { GetXhrService } from 'src/app/core/services/GetXHR/get-xhr.service';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(
    private http: HttpClient,
    private _getXhrService: GetXhrService
  ) {}

  getAllDrivers(): Observable<any> {
    return this._getXhrService.getData(`${ALERT_LIST}`);
  }
}
