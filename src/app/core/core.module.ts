import { NgModule, ErrorHandler } from "@angular/core";
import { BusinessServiceModule } from "./services/business-services/business-service.module";
import { InjectorModule } from "./helpers/injector/injector.module";

import { AuthGuard } from "./guards/auth.guard";
import { FreeGuard } from "./guards/free.guard";
import { GlobalAlertHandler } from "./services/global-services/alert-services/alert-handler";
import { GlobalErrorHandler } from "./services/global-services/error-services/error-handler";

@NgModule({
  imports: [BusinessServiceModule, InjectorModule],
  declarations: [],
  exports: [],
  providers: [
    AuthGuard,
    FreeGuard,
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    GlobalAlertHandler
  ]
})
export class CoreModule { }
