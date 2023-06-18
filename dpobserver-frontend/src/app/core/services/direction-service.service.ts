import { Injectable } from '@angular/core';
import { LangEnum } from '../enums/lang.enum';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {
  constructor() {
   
  }
  changeDirection(lang) {
     lang ==LangEnum.arabic ? (document.body.dir = "rtl", document.body.style.setProperty('text-align','right'))
     :( document.body.dir = "ltr",document.body.style.setProperty('text-align','left'))
    }
}
