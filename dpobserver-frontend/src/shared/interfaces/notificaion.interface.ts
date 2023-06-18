export interface Notification {
   id: number;
  readonly title: string;
  description: string;
  orderId: number;
  notificationType: number;
  toUser: string;
  isRead: boolean;
}
