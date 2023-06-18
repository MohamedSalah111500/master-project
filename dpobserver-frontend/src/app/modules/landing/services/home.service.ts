import { Injectable } from "@angular/core";
import { GetXhrService } from "src/app/core/services/GetXHR/get-xhr.service";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  constructor(private getXhrService: GetXhrService) {}

  
}
