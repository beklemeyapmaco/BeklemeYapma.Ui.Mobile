import { NgModule, ErrorHandler } from "@angular/core";
import { BusinessServiceModule } from "./services/business-services/business-service.module";
import { InjectorModule } from "./helpers/injector/injector.module";

import { AuthGuard } from "./guards/auth.guard";
import { FreeGuard } from "./guards/free.guard";
import { GlobalAlertHandler } from "./services/global-services/alert-services/alert-handler";
import { GlobalErrorHandler } from "./services/global-services/error-services/error-handler";

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

const firebaseConfig = {
  apiKey: "AIzaSyCWv5HyGZJlN8w7Tp9aBOejSnVV8xQufVY",
  authDomain: "beklemeyapmaapp.firebaseapp.com",
  databaseURL: "https://beklemeyapmaapp.firebaseio.com",
  projectId: "beklemeyapmaapp",
  storageBucket: "beklemeyapmaapp.appspot.com",
  messagingSenderId: "513238388502"
}

@NgModule({
  imports: [
    BusinessServiceModule,
    InjectorModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  declarations: [],
  exports: [],
  providers: [
    GooglePlus,
    AuthGuard,
    FreeGuard,
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    GlobalAlertHandler
  ]
})
export class CoreModule { }
