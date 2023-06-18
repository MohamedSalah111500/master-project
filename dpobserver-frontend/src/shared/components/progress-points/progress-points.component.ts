import { Component, Input } from "@angular/core";

@Component({
  selector: "progress-points",
  templateUrl: "./progress-points.component.html",
  styleUrls: ["./progress-points.component.scss"],
})
export class ProgressPointsComponent {
  numbers = Array(5).map((x, i) => i);
  @Input() progress = 3;
}
