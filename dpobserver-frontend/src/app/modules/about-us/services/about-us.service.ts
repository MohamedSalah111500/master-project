import { Injectable } from "@angular/core";
import { ABOUT_US_API } from "src/app/core/constans/urls";
import { GetXhrService } from "src/app/core//services/GetXHR/get-xhr.service";

@Injectable({
  providedIn: "root",
})
export class AboutUsService {
  constructor(private getXhrService: GetXhrService) {}

  getAboutUsData() {
    return this.getXhrService.getData(ABOUT_US_API);
  }
}
