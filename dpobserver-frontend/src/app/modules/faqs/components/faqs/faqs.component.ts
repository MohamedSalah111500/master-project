import { Component, OnInit } from "@angular/core";
import { FAQ } from "../../models/FAQ.interface";
import { FaqService } from "../../service/faq.service";

@Component({
  selector: "app-faqs",
  templateUrl: "./faqs.component.html",
  styleUrls: ["./faqs.component.scss"],
})
export class FaqsComponent implements OnInit {
  questions = [
    {question:'Why do you need an FAQ section?',answer:'A good website experience anticipates the needs of a user at every stage of their journey, and on e'},
    {question:'Why do you need an FAQ section?',answer:'A good website experience anticipates the needs of a user at every stage of their journey, and on e'},
    {question:'Why do you need an FAQ section?',answer:'A good website experience anticipates the needs of a user at every stage of their journey, and on e'},
    {question:'Why do you need an FAQ section?',answer:'A good website experience anticipates the needs of a user at every stage of their journey, and on e'},
    {question:'Why do you need an FAQ section?',answer:'A good website experience anticipates the needs of a user at every stage of their journey, and on e'},

  ]
  constructor(private faqService: FaqService) {}
  ngOnInit() {

  }

}
