import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SearchDataService {
  public searchData$: BehaviorSubject<any> = new BehaviorSubject(undefined);
  setSearchData(value: any) {
    this.searchData$.next(value);
  }

  get getSearchData(): Observable<any> {
    return this.searchData$;
  }
}
