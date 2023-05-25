import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './MyComponent/login-page/login-page.component';
import { InformationComponent } from './MyComponent/information/information.component';
import { AppComponent } from './app.component';
import { SimulatorComponent } from './MyComponent/simulator/simulator.component';
import { DataCleanerComponent } from './MyComponent/data-cleaner/data-cleaner.component';

const routes: Routes = [
 { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent},
  { path: 'dataCleaner', component: DataCleanerComponent },
  {path : 'simulator' , component : SimulatorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
