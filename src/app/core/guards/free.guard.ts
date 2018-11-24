import { Injectable } from "@angular/core";
import {
  CanActivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";

import { NavController } from "@ionic/angular";

@Injectable()
export class FreeGuard implements CanActivate {
  constructor(private navController: NavController) { }

  canActivate(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
    return true;
    // if (localStorage.getItem("TOKEN")) {
    //   this.navController.navigateRoot("/home");
    //   return false;
    // } else {
    //   return true;
    // }
  }
}
