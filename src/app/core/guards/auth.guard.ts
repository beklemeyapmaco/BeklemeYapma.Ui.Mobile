import { Injectable } from "@angular/core";
import {
  CanActivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";
import { NavController } from "@ionic/angular";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private navController: NavController
  ) { }

  canActivate(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
    return true;
    // if (localStorage.getItem("TOKEN")) {
    //   return true;
    // } else {
    //   this.navController.navigateRoot("/login");
    //   return false;
    // }
  }
}
