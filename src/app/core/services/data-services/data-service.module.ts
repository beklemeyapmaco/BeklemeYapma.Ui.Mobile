import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { InjectorModule } from "../../helpers/injector/injector.module";
import { BaseDataService } from "./base-data.service";

@NgModule({
  imports: [HttpClientModule, InjectorModule],
  declarations: [],
  providers: [
  ]
})
export class DataServiceModule {}
