import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,



  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    SharedModule
  ],
  bootstrap: []
})
export class LandingModule { }
