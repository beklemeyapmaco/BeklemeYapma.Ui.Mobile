import { NgModule } from "@angular/core";
import { BusinessServiceModule } from "./services/business-services/business-service.module";
import { InjectorModule } from "./helpers/injector/injector.module";

import { AuthGuard } from "./guards/auth.guard";
import { FreeGuard } from "./guards/free.guard";

@NgModule({
  imports: [BusinessServiceModule, InjectorModule],
  declarations: [],
  exports: [],
  providers: [
    AuthGuard,
    FreeGuard,
  ]
})
export class CoreModule { }
