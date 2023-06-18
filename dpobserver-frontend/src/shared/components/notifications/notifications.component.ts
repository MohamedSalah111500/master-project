import { Component, Input } from "@angular/core";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.component.html",
  styleUrls: ["./notifications.component.scss"],
})
export class NotificationsComponent {
  @Input() notifications: any = [];

  notificationss = [
    {
      title: "Yesterday, October 9,2022",
      group: [
        {
          title: "Payment Successful",
          time: "9 October,2022",
          description: "You successfully made payment at concerts",
          type: "payment",
        },
        {
          title: "Payment Successful",
          time: "9 October,2022",
          description: "You successfully made payment at concerts",
          type: "payment",
        },
        {
          title: "Payment Successful",
          time: "9 October,2022",
          description: "You successfully made payment at concerts",
          type: "feature",
        },
      ],
    },
    {
      title: "Today,October 10,2022",
      group: [
        {
          title: "Payment Successful",
          time: "9 October,2022",
          description: "You successfully made payment at concerts",
          type: "feature",
        },
        {
          title: "Payment Successful",
          time: "9 October,2022",
          description: "You successfully made payment at concerts",
          type: "payment",
        },
      ],
    },
    {
      title: "Today,October 10,2022",
      group: [
        {
          title: "Payment Successful",
          time: "9 October,2022",
          description: "You successfully made payment at concerts",
          type: "feature",
        },
        {
          title: "Payment Successful",
          time: "9 October,2022",
          description: "You successfully made payment at concerts",
          type: "payment",
        },
      ],
    },
  ];
}
