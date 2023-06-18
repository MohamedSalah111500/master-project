import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { LOGIN_API, SIGNUP_API } from 'src/app/core/constans/urls';
import { SignupCredential, User } from 'src/app/core/models/api';
import { GetXhrService } from 'src/app/core/services/GetXHR/get-xhr.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
  constructor(private _getXhrService: GetXhrService, private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    // console.log("is Logged", this.isLoggedIn());
    return this.isLoggedIn() || this._router.createUrlTree(['auth']);
  }

  Signup(credentialObj: FormData): Observable<any> {
    return this._getXhrService.postData(SIGNUP_API, credentialObj, null);
  }

  Login(credentialObj: any): any {
    // return this._getXhrService.postData(
    //   LOGIN_API,
    //   credentialObj,
    //   null,
    //   environment.APIAuthBaseURL
    // );
    localStorage.setItem('accessToken', 'token');
  }

  saveUserData(userData: User): void {
    let convertUserData: string = JSON.stringify(userData);
    localStorage.setItem('userData', convertUserData);
    localStorage.setItem('accessToken', `${userData.accessToken}`);
  }

  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('accessToken');
    return authToken ? true : false;
  }
}
