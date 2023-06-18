import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HelpersFunction } from 'src/app/core/help/help';
import { ToastrService } from 'ngx-toastr';
import { SignupCredential, User } from 'src/app/core/models/api';
import { NavigationService } from 'src/shared/services/navigation.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    public helpersFunction: HelpersFunction,
    private _nav: NavigationService
  ) {}

  ngOnInit(): void {
    // init Signup form
    this.initSignupForm();
  }
  initSignupForm() {
    this.signupForm = this._formBuilder.group({
      fname: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.email]],
      phone: [
        null,
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      password: [null, [Validators.required, Validators.minLength(6)]],
      rePassword: [null, [Validators.required]],
      dateOfBirth: [null, [Validators.required]],
      address: [null, [Validators.required]],      
      imgUrl: [null],
    });
  }

  onSubmit() {
    const formData = new FormData();
    if (this.signupForm?.valid) {
      let reqBody: any = {
        name: this.signupForm.value.fname,
        phone: this.signupForm.value.phone,
        password: this.signupForm.value.password,
        email: this.signupForm.value.email,
        dateOfBirth: this.signupForm.value.dateOfBirth,
        address: this.signupForm.value.address,
        image: this.signupForm.value.imgUrl,

      };
      for (let key in reqBody) {
        formData.append(key, (reqBody as any)[key]);
      }

      this._authService.Signup(reqBody).subscribe(
        (res) => {
          this._authService.saveUserData(res.user as User);
          this._nav.navigate(['./']);
        },
        () => {},
        () => {}
      );
    }
  }
}
