import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogsComponent } from './logs/logs.component';
import { MainComponent } from './main/main.component';
import { PlacesComponent } from './places/places.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'devices',
        component: DevicesComponent
      },
      {
        path: 'places',
        component: PlacesComponent
      },
      {
        path: 'logs',
        component: LogsComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'users',
        component: UsersComponent,
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
