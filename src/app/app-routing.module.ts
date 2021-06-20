import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { GuestGuard } from './auth/guest.guard';
import { DevicesComponent } from './pages/devices/devices.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LogsComponent } from './logs/logs.component';
import { MainComponent } from './main/main.component';
import { PlacesComponent } from './pages/places/places.component';
import { SettingsComponent } from './pages/settings/settings.component';
import {DeviceComponent} from "./pages/device/device.component";
import {FogsComponent} from "./pages/fogs/fogs.component";
import {SubPlacesComponent} from "./pages/places/sub-places/sub-places.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: MainComponent,
    canActivate: [AuthGuard],
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
        path: 'devices/:id',
        component: DeviceComponent
      },
      {
        path: 'places',
        component: PlacesComponent
      },
      {
        path: 'places/:id',
        component: SubPlacesComponent
      },
      {
        path: 'fogs',
        component: FogsComponent
      },
      {
        path: 'fogs/:id',
        component: FogsComponent
      },
      {
        path: 'logs',
        component: LogsComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuestGuard]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
