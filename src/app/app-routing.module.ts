import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./core/guards/auth.guard";
import { FreeGuard } from './core/guards/free.guard';

const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuard],
    loadChildren: "./modules/tabs/tabs.module#TabsPageModule"
  },
  {
    path: "login",
    canActivate: [FreeGuard],
    loadChildren: "./modules/login/login.module#LoginPageModule"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
