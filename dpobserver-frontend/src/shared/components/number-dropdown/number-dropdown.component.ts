import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "number-dropdown",
  templateUrl: "./number-dropdown.component.html",
  styleUrls: ["./number-dropdown.component.scss"],
})
export class NumberDropdownComponent {
  @Output("change") change = new EventEmitter<any>();

  selectNumber(e: Event) {
    const value = (e.target as HTMLInputElement)?.value;
    this.change.emit(value);
  }
}
// {
//   addressOne: "test addres";
//   addressTow: "cccc";
//   area: "Dubai";
//   date: "2023-02-04";
//   fname: "mohamed salah";
//   notes: null;
//   phone: "01027792252";
//   products: [
//     {
//       "id": "6",
//       "quantity": 6,
//     }
//   ]
// }
