import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsRoutingModule } from "./tabs-routing.module";
import { TabsPage } from './pages/tabs.page';
import { HomePageModule } from '../home/home.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsRoutingModule,
    HomePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
