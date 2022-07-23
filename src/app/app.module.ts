import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BtnComponent } from './component/component/btn/btn.component';
import { HeaderComponent } from './component/component/header/header.component';
import { MainComponent } from './component/page/main/main.component';
import { CardsComponent } from './component/component/cards/cards.component';
import { LoginComponent } from './component/page/login/login.component';
import { FormComponent } from './component/component/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    BtnComponent,
    HeaderComponent,
    MainComponent,
    CardsComponent,
    LoginComponent,
    FormComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatChipsModule,
    MatSelectModule,
    MatInputModule,
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
