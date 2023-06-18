export interface Alerts {
  number: string;
  contactPersonName: string;
  phoneNumber: string;
  deliveryAddress: string;
  status: number;
  orderDate: string;
  note: string;
  shippingFees: number;
  totalAmount: number;
  alerts: Alert[];
}

export interface Alert {
  id: string;
  label:string;
  date: Date;
  location: string;
  dangerPercentage:number;
  status: number;
  progress: number;
  driver: Driver;
}


export interface Driver {
  id: string;
  name: string;
  address: string;
  type: string;
  image: string;
  description: string;
}
