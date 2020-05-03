import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

//Rutas
import { APP_ROUTES } from './app.routes';
import { PagesModule } from './pages/pages.module';


//temporal
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
// import {ChartsModule} from 'ng2-charts'
// import { ChartsModule } from 'ng2-charts/ng2-charts'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
