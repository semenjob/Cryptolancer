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
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';



import { BtnComponent } from './component/component/btn/btn.component';
import { HeaderComponent } from './component/component/header/header.component';
import { CardsComponent } from './component/component/cards/cards.component';
import { FormComponent } from './component/component/form/form.component';


import { AppComponent } from './app.component';
import { MainComponent } from './component/page/main/main.component';
import { RegisterComponent } from './component/page/register/register.component';
import { LogoComponent } from './component/component/logo/logo.component';
import { ProfileComponent } from './component/page/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    BtnComponent,
    HeaderComponent,
    MainComponent,
    CardsComponent,
    FormComponent,
    RegisterComponent,
    LogoComponent,
    ProfileComponent,
  ],
  imports: [
    MatDatepickerModule,
    MatRadioModule,
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
