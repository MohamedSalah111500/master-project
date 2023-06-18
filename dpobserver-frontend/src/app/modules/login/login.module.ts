import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./components/login/login.component";
import { LoginRoutingModule } from "./login-routing.module";
import { SharedModule } from "src/shared/shared.module";
import { SignupComponent } from "./components/signup/signup.component";

@NgModule({
  declarations: [LoginComponent,SignupComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class LoginModule {}
