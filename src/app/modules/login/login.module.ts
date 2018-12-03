import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LoginPage } from "./pages/login.page";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from '@ngx-translate/core';
import { GoogleLoginComponent } from "./components/google-login/google-login.component";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: LoginPage
      }
    ]),
    TranslateModule.forChild()
  ],
  declarations: [LoginPage, GoogleLoginComponent],
  entryComponents: [GoogleLoginComponent]
})
export class LoginPageModule { }
