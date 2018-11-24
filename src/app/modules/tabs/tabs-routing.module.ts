import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from "../../core/guards/auth.guard";
import { TabsPage } from './pages/tabs.page';
import { HomePage } from '../home/pages/home.page';

const routes: Routes = [
    {
      path: "tabs",
      component: TabsPage,
      children: [
        {
          path: "",
          redirectTo: "/tabs/(home:home)",
          pathMatch: "full",
        },
        {
          path: "home",
          outlet: "home",
          canActivate: [AuthGuard],
          component: HomePage
        },
        {
          path: "about",
          outlet: "about",
          canActivate: [AuthGuard],
          component: HomePage
        },
        {
          path: "contact",
          outlet: "contact",
          canActivate: [AuthGuard],
          component: HomePage
        }
      ]
    },
    {
      path: "",
      redirectTo: "/tabs/(home:home)",
      pathMatch: "full"
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsRoutingModule { }
