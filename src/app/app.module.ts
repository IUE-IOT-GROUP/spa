import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DevicesComponent } from './devices/devices.component';
import { LoginComponent } from './login/login.component';
import { LogsComponent } from './logs/logs.component';
import { PlacesComponent } from './places/places.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { GetFirstCharacterPipe } from './pipes/get-first-character.pipe';
import { AuthInterceptorInterceptor } from './interceptors/auth-interceptor.interceptor';
import { AsideComponent } from './partials/aside/aside.component';
import { SubheaderComponent } from './partials/subheader/subheader.component';
import { ContentComponent } from './partials/content/content.component';
import { CardComponent } from './partials/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DevicesComponent,
    LoginComponent,
    LogsComponent,
    PlacesComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    GetFirstCharacterPipe,
    AsideComponent,
    SubheaderComponent,
    ContentComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi: true },],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
