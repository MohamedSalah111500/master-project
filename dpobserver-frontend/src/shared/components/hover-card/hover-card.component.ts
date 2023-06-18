import { Component, Input, OnChanges, OnInit } from "@angular/core";

@Component({
  selector: "hover-card",
  templateUrl: "./hover-card.component.html",
  styleUrls: ["./hover-card.component.scss"],
})
export class HoverCardComponent {
  @Input() card: any;
}
