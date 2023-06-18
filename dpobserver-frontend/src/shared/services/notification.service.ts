import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GetXhrService } from "src/app/core/services/GetXHR/get-xhr.service";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  constructor(private _getXhrService: GetXhrService) {}

  getAllNotifications(credentialObj: any) {
  }
}
