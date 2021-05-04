import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogsComponent } from './logs/logs.component';
import { PlacesComponent } from './places/places.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'devices',
    component: DevicesComponent
  },
  {
    path: 'login',
    component: LoginComponent
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
