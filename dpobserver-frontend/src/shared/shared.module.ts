import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {  SafePipe } from "./pipes/safe-html.pipe";
import { SvgComponent } from "./svg-assets/svg/svg.component";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";

// import { ChartsModule } from 'ng2-charts';

// external modules
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";

// import { MyPerformanceComponent } from './my-performance/my-performance.component';
// import { MyRoleComponent } from './my-role/my-role.component';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { FooterComponent } from "./components/footer/footer.component";
import { HoverCardComponent } from "./components/hover-card/hover-card.component";
import { HeaderComponent } from "./components/header/header.component";
import { ShowCasesComponent } from "./components/show-cases/show-cases.component";
import { TabsFilterComponent } from "./components/tabs-filter/tabs-filter.component";

//slick carsoule
import { NavComponent } from "./components/nav/nav.component";
//angular material
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import { MatSliderModule } from "@angular/material/slider";
import { NotificationsComponent } from "./components/notifications/notifications.component";
import { ProgressPointsComponent } from "./components/progress-points/progress-points.component";
import { ToastrModule } from "ngx-toastr";
import { InputTogglePasswordComponent } from "./components/input-toggle-password/input-toggle-password.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { NumberDropdownComponent } from "./components/number-dropdown/number-dropdown.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";


@NgModule({
  declarations: [
    SafePipe,
    SvgComponent,
    FooterComponent,
    HoverCardComponent,
    HeaderComponent,
    ShowCasesComponent,
    NavComponent,
    NotificationsComponent,
    InputTogglePasswordComponent,
    TabsFilterComponent,
    ProgressPointsComponent,
    NumberDropdownComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    // ChartsModule,
    MatSidenavModule,
    RouterModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    NgxSkeletonLoaderModule,
    MatRadioModule,
    MatSliderModule,
    ToastrModule.forRoot(),
    MatProgressSpinnerModule,
    MatIconModule,
  ],
  exports: [
    SafePipe,
        SvgComponent,
    MatSidenavModule,
    MatCardModule,
    MatMenuModule,
    // MyRoleComponent,
    // MyPerformanceComponent,
    FooterComponent,
    HoverCardComponent,
    HeaderComponent,
    ShowCasesComponent,
    NavComponent,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSliderModule,
    NotificationsComponent,
    InputTogglePasswordComponent,
    TabsFilterComponent,
    ProgressPointsComponent,
    ToastrModule,
    NgxSkeletonLoaderModule,

    NumberDropdownComponent,
    MatProgressSpinnerModule,
    NotFoundComponent,
    MatIconModule,
  ],
  entryComponents: [
    // SnackbarComponent
  ],
})
export class SharedModule {}
