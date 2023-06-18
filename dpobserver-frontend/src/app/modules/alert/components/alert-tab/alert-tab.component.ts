import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Alert } from "src/shared/interfaces/alert.inferface";

@Component({
  selector: "alert-tab",
  templateUrl: "./alert-tab.component.html",
  styleUrls: ["./alert-tab.component.scss"],
})
export class AlertTabComponent {
  @Input() alert:any

  @Output("onClick") onClick = new EventEmitter<any>();
  @Input() activeAlertId: string = "0";

  alertClick(): void {
    console.log(this.alert)
   this.activeAlertId = this.alert?.id;
    this.onClick.emit(this.alert);
  }
}
