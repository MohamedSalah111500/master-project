import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "../interceptors/jwt.interceptor";
import { ErrInterceptor } from "../interceptors/err.interceptor";

export const TyibatInterceptors = [
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrInterceptor, multi: true },
];
