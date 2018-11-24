import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../../../core/services/business-services/user/user.service";
import { User } from "../../../models/user/user";
import { AppComponent } from "../../../app.component";
import { NavController } from "@ionic/angular";

import { BaseComponent } from "../../../../shared/base/base.component";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage extends BaseComponent implements OnInit {
  user: User;

  constructor(public navController: NavController
    , public appComponent: AppComponent
    , public userService: UserService
    , private router: Router) { super() }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
  }

  navigate(url: string) {
    // this.navController.navigateRoot(url);
  }
}
