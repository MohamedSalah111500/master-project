import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ContactUsService } from "../../services/contact-us.service";
import { ToastrModule, ToastrService } from "ngx-toastr";
import { ContactUs } from "../../models/ContactUs.interface";
@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
})
export class ContactUsComponent implements OnInit {
  isLoading: boolean = true;
  cards: ContactUs[] = [
    {
      icon: "fa fa-location-dot",
      title: "Head Office",
      description1: "",
      description2: "",
      isActive: false,
    },
    {
      icon: "fa fa-phone",
      title: "Phone Number",
      description1: "",
      description2: "",
      isActive: true,
    },
    {
      icon: "fa fa-envelope",
      title: "Support Mail",
      description1: "",
      description2: "",
      isActive: false,
    },
  ];
  imageUrl: string = "";

  onClick(index: any) {
    this.cards.forEach((ele) => {
      ele.isActive = false;
    });
    this.cards[index].isActive = true;
  }
  contactUsForm!: FormGroup;
  isSubmitted: boolean = false;
  constructor(
    private fb: FormBuilder,
    private contactUsService: ContactUsService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.build();
  }

 
  build() {
    this.contactUsForm = this.fb.group({
      name: ["", Validators.required],
      subject: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      description: ["", Validators.required],
    });
  }

  get f() {
    return this.contactUsForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.contactUsForm.invalid) {
      return;
    } else {
     
    }
  }

  onSucess() {
    this.isSubmitted = false;
    this.contactUsForm.reset();
  }
}
