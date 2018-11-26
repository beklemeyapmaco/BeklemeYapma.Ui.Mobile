import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppComponent } from "../../../app.component";
import { NavController } from "@ionic/angular";

import { BaseComponent } from "../../../../shared/base/base.component";
import { RestaurantResponse } from "src/app/models/data-models/responses/restaurant/restaurant.response";
import { RestaurantDataService } from "src/app/core/services/data-services/restaurant/restaurant.service";
import { BaseResponse } from "src/app/models/data-models/responses/base.response";
import { BasePaginatedResponse } from "src/app/models/data-models/responses/base.paginated.response";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage extends BaseComponent implements OnInit {
  restaurants: RestaurantResponse[] = [];

  constructor(public navController: NavController
    , public appComponent: AppComponent
    , public restaurantService: RestaurantDataService
    , private router: Router) { super() }

  ngOnInit() {
    this.restaurantService.getRestaurants(null)
      .subscribe((restaurants) => {
        this.restaurants = restaurants.data.items;
      });
  }

  navigate(url: string) {
    // this.navController.navigateRoot(url);
  }
}
