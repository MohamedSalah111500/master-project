import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/login/services/auth.service';
import { NotificationService } from 'src/shared/services/notification.service';
import { Navbar } from './navbar';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  isLoggenIn: boolean = true;
  showNotifications: boolean = false;
  navItems: Navbar[] = [
    {
      title: 'Simulation',
      routerLink: '/landing',
      showTab: true,
    },
    {
      title: 'Alerts',
      routerLink: '/alert',
      showTab: false,
    },
    {
      title: 'About Us',
      routerLink: '/about-us',
      showTab: true,
    },
    {
      title: 'FAQs',
      routerLink: '/faqs',
      showTab: true,
    },
    {
      title: 'Contact Us',
      routerLink: '/contact-us',
      showTab: true,
    },
  ];
  notifications: Notification[] = [];
  userData: any = {};
  constructor(
    public authService: AuthService,
    private router: Router,
    private _notificationService: NotificationService
  ) {}
  ngOnInit(): void {
    this.getNotifications();
     this.getDataFromStorage().then(v=> this.userData = v)
  }

 async getDataFromStorage() {
    let userData = await localStorage.getItem('userData');
    if (userData) {
      return JSON.parse(userData);
    } else {
      return {
        image: 'https://media.licdn.com/dms/image/D4E03AQHA23dgm2n7gQ/profile-displayphoto-shrink_800_800/0/1702244165133?e=1713398400&v=beta&t=WsdBsfzaqG8dLpRv-ND1uC7pqwAOwZ5sk6vCapyPMms',
      };
    }
  }
  getNotifications() {
    // let body = {
    //   filterOptions: [{}],
    //   sortOption: {},
    // };
    // this._notificationService.getAllNotifications(body).subscribe(
    //   (res) => {
    //     this.notifications = res.value.items;
    //   },
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {}
    // );
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (window.scrollY > 0) {
      document.getElementsByClassName('navbar')[0].classList.add('scroller');
    } else {
      document.getElementsByClassName('navbar')[0].classList.remove('scroller');
    }
  }

  //On Notificaion Click
  @HostListener('document:click', ['$event']) onDocumentClick(event: any) {
    this.showNotifications = false;
  }

  onNotifactionClick(event: any) {
    event.stopPropagation();
    this.showNotifications = true;
  }

  //on logout
  logOut() {
    this.router.navigate(['/auth']);
    localStorage.clear();
  }
}
