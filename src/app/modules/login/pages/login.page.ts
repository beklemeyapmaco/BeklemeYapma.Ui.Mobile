import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppComponent } from "../../../app.component";
import { NavController } from "@ionic/angular";

import { BaseComponent } from "src/shared/base/base.component";
import { GlobalAlertHandler } from "src/app/core/services/global-services/alert-services/alert-handler";

@Component({
  selector: "app-home",
  templateUrl: "login.page.html",
  styleUrls: ["login.page.scss"]
})
export class LoginPage extends BaseComponent implements OnInit {
  
  constructor(public navController: NavController
    , public appComponent: AppComponent
    , private router: Router
    , private alertHandler: GlobalAlertHandler) { super() }

  ngOnInit() {
    
  }

  navigate(url: string) {
    // this.navController.navigateRoot(url);
  }
}
