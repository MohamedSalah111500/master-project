import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { NotFoundComponent } from "src/shared/components/not-found/not-found.component";
import { AuthService } from "./modules/login/services/auth.service";

const routes: Routes = [
  { path: "", redirectTo: "/landing", pathMatch: "full" },
  {
    path: "landing",
    canActivate: [AuthService],

    loadChildren: () =>
      import("./modules/landing/landing.module").then((m) => m.LandingModule),
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./modules/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "alert",
    canActivate: [AuthService],
    loadChildren: () =>
      import("./modules/alert/alert.module").then((m) => m.AlertModule),
  },
 

  {
    path: "faqs",
    loadChildren: () =>
      import("./modules/faqs/faqs.module").then((m) => m.FaqsModule),
  },

  {
    path: "contact-us",
    loadChildren: () =>
      import("./modules/contact-us/contact-us.module").then(
        (m) => m.ContactUsModule
      ),
  },

  {
    path: "about-us",
    loadChildren: () =>
      import("./modules/about-us/about-us.module").then((m) => m.AboutUsModule),
  },




  { path: "**", component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
