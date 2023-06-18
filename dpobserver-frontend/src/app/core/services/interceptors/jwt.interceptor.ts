import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "app/modules/login/services/auth.service";
import { TranslationService } from "../translation/translation.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  lang: string | undefined;

  setLang(lang: string) {
    this.lang = lang;
  }
  constructor(
    private auth_ser: AuthService,
    public translationService: TranslationService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem("accessToken");

    request = request.clone({
      setHeaders: {
        Authorization: `${token}`,
      },
    });

    return next.handle(request);
  }
}
