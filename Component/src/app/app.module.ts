import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { SuccesAlertComponent } from './succes-alert/succes-alert.component';
import {WarningAlertComponent} from "./warning-alert/warning-alert.component";
// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    SuccesAlertComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
