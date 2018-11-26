import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { InjectorModule } from "../../helpers/injector/injector.module";
import { BaseDataService } from "./base-data.service";
import { RestaurantDataService } from "./restaurant/restaurant.service";

@NgModule({
  imports: [HttpClientModule, InjectorModule],
  declarations: [],
  providers: [
    RestaurantDataService
  ]
})
export class DataServiceModule { }
