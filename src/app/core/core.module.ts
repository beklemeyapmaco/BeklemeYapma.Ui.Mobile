import { NgModule } from "@angular/core";
import { BusinessServiceModule } from "./services/business-services/business-service.module";
import { InjectorModule } from "./helpers/injector/injector.module";

@NgModule({
  imports: [BusinessServiceModule, InjectorModule],
  declarations: [],
  exports: [],
  providers: [
  ]
})
export class CoreModule { }
