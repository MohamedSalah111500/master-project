import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HelpersFunction } from "src/app/core//help/help";
import { LoginCredential, User } from "src/app/core//models/api";
import { GetXhrService } from "src/app/core//services/GetXHR/get-xhr.service";
import { NavigationService } from "src/shared/services/navigation.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading: boolean = false;
  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    public helpersFunction: HelpersFunction,
    public getXhrService: GetXhrService,
    private _nav: NavigationService
  ) {
    this.getXhrService.loading.subscribe((res) => {
      this.loading = res;
    });
  }

  ngOnInit(): void {
    // init login form
    this.initloginForm();
  }
  initloginForm() {
    this.loginForm = this._formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    // const formData = new FormData();
    // if (this.loginForm?.valid) {
    //   let reqBody: LoginCredential = {
    //     email: this.loginForm.value.email,
    //     password: this.loginForm.value.password,
    //   };
    //   for (let key in reqBody) {
    //     formData.append(key, (reqBody as any)[key]);
    //   }

    //   this._authService.Login(reqBody).subscribe(
    //     (res) => {
    //       console.log(res);
    //       this._authService.saveUserData(res as User);
    //       this._nav.navigate(["./"]);
    //     },
    //     () => {},
    //     () => {}
    //   );
    // }
    localStorage.setItem("accessToken",'token');
    this._nav.navigate(["./"]);
  }
}
