import { Component } from '@angular/core';

@Component({
  selector: 'app-show-cases',
  templateUrl: './show-cases.component.html',
  styleUrls: ['./show-cases.component.scss']
})
export class ShowCasesComponent {
  cards = [
    {
      id: 0,
      img: '/assets/images/card-imgs/item-two.png',
      title: 'oil cook',
      text: 'Cooking Oli Organic Flavoured',
      uom: '1000 g',
      price: 50.75,
    },
    {
      id: 1,
      img: '/assets/images/card-imgs/item-one.png',
      title: 'oil cook',
      text: 'Cooking Oli Organic Flavoured',
      uom: '1000 g',
      price: 50.75,
    },
    {
      id: 2,
      img: '/assets/images/card-imgs/item-three.png',
      title: 'oil cook',
      text: 'Cooking Oli Organic Flavoured',
      uom: '1000 g',
      price: 50.75,
    },
    {
      id: 3,
      img: '/assets/images/card-imgs/item-two.png',
      title: 'oil cook',
      text: 'Cooking Oli Organic Flavoured',
      uom: '1000 g',
      price: 50.75,
    },
    {
      id: 4,
      img: '/assets/images/card-imgs/item-two.png',
      title: 'oil cook',
      text: 'Cooking Oli Organic Flavoured',
      uom: '1000 g',
      price: 50.75,
    },
    {
      id: 5,
      img: '/assets/images/card-imgs/item-two.png',
      title: 'oil cook',
      text: 'Cooking Oli Organic Flavoured',
      uom: '1000 g',
      price: 50.75,
    },
  ];

  HoverCards = [
    {
      id: 0,
      img: '/assets/images/card-shadow/one.png',
      text: 'Fruits & Vegetables',
    },
    {
      id: 0,
      img: '/assets/images/card-shadow/two.png',
      text: 'Fruits & Vegetables',
    },
    {
      id: 0,
      img: '/assets/images/card-shadow/one.png',
      text: 'Fruits & Vegetables',
    },
    {
      id: 0,
      img: '/assets/images/card-shadow/two.png',
      text: 'Fruits & Vegetables',
    },
    {
      id: 0,
      img: '/assets/images/card-shadow/one.png',
      text: 'Fruits & Vegetables',
    },
    {
      id: 0,
      img: '/assets/images/card-shadow/three.png',
      text: 'Fruits & Vegetables',
    },
  ];
}
