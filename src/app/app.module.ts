import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';


import { AppComponent } from './app.component';
import { BtnComponent } from './component/component/btn/btn.component';
import { HeaderComponent } from './component/component/header/header.component';
import { MainComponent } from './component/page/main/main.component';
import { CardsComponent } from './component/component/cards/cards.component';
import { LoginComponent } from './component/page/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    BtnComponent,
    HeaderComponent,
    MainComponent,
    CardsComponent,
    LoginComponent,
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
