import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './framework/components/dashboard/dashboard.component'
import {TurkbotViewComponent} from "./framework/components/turkbot/turkbot-view/turkbot-view.component";
import {TurkbotCreateComponent} from "./framework/components/turkbot/turkbot-create/turkbot-create.component";
import {TurkbotEditComponent} from "./framework/components/turkbot/turkbot-edit/turkbot-edit.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'turkbot',
        component: TurkbotViewComponent
      },
      {
        path: 'turkbot/new',
        component: TurkbotCreateComponent
      },
      {
        path: 'turkbot/:id',
        component: TurkbotEditComponent
      }
      /*{
        path: 'users',
        component: UserViewComponent
      },
      {
        path: 'users/new',
        component: UserCreateComponent
      },
      {
        path: 'users/:id',
        component: UserEditComponent
      },*/
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
