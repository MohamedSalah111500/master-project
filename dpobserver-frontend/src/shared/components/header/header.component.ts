import { Component, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { HomeService } from "src/app/modules/landing/services/home.service";
import { SearchDataService } from "src/shared/services/search-data-service/search-data.service";

@Component({
  selector: "header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  searchProductControl: FormControl = new FormControl("");
  isLoading: boolean = true;

  constructor(
  ) {}

  ngOnInit(): void {
  }


}
