import { NgModule } from "@angular/core";
import { AlertRoutingModule } from "./alert-routing.module";
import { CommonModule } from "@angular/common";
import { AlertComponent } from "./components/alert/alert.component";
import { ItemComponent } from "./components/item/item.component";
import { AlertStatus } from "./components/alert-status/alert-status.component";
import { SharedModule } from "src/shared/shared.module";
import { AlertTabComponent } from "./components/alert-tab/alert-tab.component";
import { AlertDetailsComponent } from "./components/alert-details/alert-details.component";
import { NoAlertFoundComponent } from "./components/no-alert-found/no-alert-found.component";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    AlertComponent,
    AlertTabComponent,
    AlertDetailsComponent,
    ItemComponent,
    AlertStatus,
    NoAlertFoundComponent
  ],
  imports: [
    CommonModule,
    AlertRoutingModule,
    CommonModule,
    SharedModule,
    MatIconModule
  ],
})
export class AlertModule {}
