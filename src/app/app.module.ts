import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './MyComponent/login-page/login-page.component';
import { InformationComponent } from './MyComponent/information/information.component';
import { SimulatorComponent } from './MyComponent/simulator/simulator.component';
import { DataCleanerComponent } from './MyComponent/data-cleaner/data-cleaner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    InformationComponent,
    SimulatorComponent,
    DataCleanerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
