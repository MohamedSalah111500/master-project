import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { BehaviorSubject, Observable, of } from "rxjs";
import { catchError, map, share, shareReplay, tap } from "rxjs/operators";
import { environment } from "../../../../environments/environment";
import { Api } from "../../models/api";

@Injectable({
  providedIn: "root",
})
export class GetXhrService {
  api: Api | undefined;
  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private httpclient: HttpClient,
    private _toastr: ToastrService
  ) {}

  getData(
    ApiName: string,
    params: any = {},
    headers: any = {}
  ): Observable<any> {
    // this.loading.next(true);
    return this.httpclient
      .get<Api>(environment.localBaseUrl + ApiName, { params })
      .pipe(share())
      .pipe(
        map((res: any) => {
          this.api = res;
          return this.api;
        }),
        tap((res: any) => {
          // this._toastr.success("your request completed successfully ");
          // this.loading.next(false);
        }),

        catchError(this.handleError<Api>("get" + ApiName))
      );
  }

  postData(
    ApiName: string,
    postBody: any = {},
    params: any = {},
    baseURL: string = environment.localBaseUrl,
    headers: any = {}
  ): Observable<any> {
    this.loading.next(true);
    return this.httpclient
      .post<Api>(baseURL + ApiName, postBody, { params })
      .pipe(share())
      .pipe(
        map((res: any) => {
          this.api = res;
          return this.api;
        }),
        tap((res: any) => {
          // this._toastr.success("your request completed successfully ");
          this.loading.next(false);
        }),

        catchError(this.handleError<Api>("post" + ApiName))
      );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.log("error handler");
      this.loading.next(false);

      let firstError: string =
        Object.entries(error.error.errors)[0].toString() ?? "unKnown error";
      this._toastr.error(firstError);
      // TODO: better job of transforming error for user consumption
      console.log(error, Object.entries(error.error.errors)[0]);
      // Let the app keep running by returning an empty result.
      return new Observable();
    };
  }
}
