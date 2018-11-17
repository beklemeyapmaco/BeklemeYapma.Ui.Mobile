import { NgModule, Injector } from "@angular/core";

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: []
})
export class InjectorModule {
  static Injector: Injector;

  constructor(private injector: Injector) {
    InjectorModule.Injector = injector;
  }
}
