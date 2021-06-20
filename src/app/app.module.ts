import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {DevicesComponent} from './pages/devices/devices.component';
import {LoginComponent} from './pages/login/login.component';
import {LogsComponent} from './logs/logs.component';
import {PlacesComponent} from './pages/places/places.component';
import {MainComponent} from './main/main.component';
import {HeaderComponent} from './partials/header/header.component';
import {FooterComponent} from './partials/footer/footer.component';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {GetFirstCharacterPipe} from './pipes/get-first-character.pipe';
import {AuthInterceptorInterceptor} from './interceptors/auth-interceptor.interceptor';
import {AsideComponent} from './partials/aside/aside.component';
import {SubheaderComponent} from './partials/subheader/subheader.component';
import {ContentComponent} from './partials/content/content.component';
import {CardComponent} from './partials/card/card.component';
import {ModalComponent} from './custom/modal/modal.component';
import {FormGroupComponent} from './custom/form-group/form-group.component';
import {DropdownComponent} from './custom/dropdown/dropdown.component';
import {DropdownItemComponent} from './custom/dropdown/dropdown-item/dropdown-item.component';
import {PlaceCardComponent} from './pages/places/place-card/place-card.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import { PlaceCardsComponent } from './pages/places/place-cards/place-cards.component';
import { DeviceCardsComponent as PlacesDeviceCardsComponent } from './pages/places/device-cards/device-cards.component';
import { DeviceCardsComponent as DevicesDeviceCardsComponent } from './pages/devices/device-cards/device-cards.component';
import { DeviceCardComponent } from './pages/devices/device-card/device-card.component';
import { DeviceComponent } from './pages/device/device.component';
import { DeviceInfoComponent } from './pages/device/device-info/device-info.component';
import { DeviceParameterInfoComponent } from './pages/device/device-parameter-info/device-parameter-info.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import { FogCardsComponent } from './pages/places/fog-cards/fog-cards.component';
import { FogsComponent } from './pages/fogs/fogs.component';
import {IConfig, NgxMaskModule} from "ngx-mask";
import {ToastrModule} from "ngx-toastr";
import { SubPlacesComponent } from './pages/places/sub-places/sub-places.component';
import {Global} from "./global";

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

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
        ModalComponent,
        FormGroupComponent,
        DropdownComponent,
        DropdownItemComponent,
        PlaceCardComponent,
        PlaceCardsComponent,
        DevicesDeviceCardsComponent,
        PlacesDeviceCardsComponent,
        DeviceCardComponent,
        DeviceComponent,
        DeviceInfoComponent,
        DeviceParameterInfoComponent,
        FogCardsComponent,
        FogsComponent,
        SubPlacesComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        CommonModule,
        NgxChartsModule,
        NgxMaskModule.forRoot(),
        ToastrModule.forRoot(),
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi: true}, Global],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
    constructor(library: FaIconLibrary) {
        library.addIconPacks(fas, far);
    }
}
