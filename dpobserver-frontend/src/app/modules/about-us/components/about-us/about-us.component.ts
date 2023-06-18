import { Component, OnInit, ViewChild } from "@angular/core";
import { AboutUs, sliderImages } from "../../models/About-us-interface";
import { AboutUsService } from "../../services/about-us.service";
@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"],
})
export class AboutUsComponent implements OnInit {
  isLoading: boolean = true;
  data: AboutUs = {};
  slides: sliderImages[] = [];

  //middel Items
  middelItems = [
    {
      id: 0,
      img: "/assets/images/about-us/middel-cards/carrots.png",
      title: "Best Price & offers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing  elit. Nunc vulputate libero et velit interdum, ac aliquet odi mattis. Class aptent taciti sociosqu ad",
    },
    {
      id: 1,
      img: "/assets/images/about-us/middel-cards/car.png",
      title: "Free delivery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing  elit. Nunc vulputate libero et velit interdum, ac aliquet odi mattis. Class aptent taciti sociosqu ad",
    },
    {
      id: 2,
      img: "/assets/images/about-us/middel-cards/arrows.png",
      title: "Quality Pro",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing  elit. Nunc vulputate libero et velit interdum, ac aliquet odi mattis. Class aptent taciti sociosqu ad",
    },
    {
      id: 3,
      img: "/assets/images/about-us/middel-cards/carrots.png",
      title: "Scure Payment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing  elit. Nunc vulputate libero et velit interdum, ac aliquet odi mattis. Class aptent taciti sociosqu ad",
    },
  ];


  constructor(private aboutUsService: AboutUsService) {}

  ngOnInit(): void {
    this.getAboutUsData();
  }

  //get about-us data
  getAboutUsData() {
    this.aboutUsService.getAboutUsData().subscribe((res: any) => {
      this.slides = res.value.sliderImages;
      this.data = res.value;
      this.isLoading = false;
    });
  }

}
