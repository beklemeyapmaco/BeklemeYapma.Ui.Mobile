import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HomePage } from "./pages/home.page";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomePage
      }
    ]),
    TranslateModule.forChild()
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
