import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { LoginComponent } from './component/page/login/login.component';
import { MainComponent } from './component/page/main/main.component';
import { RegisterComponent } from './component/page/register/register.component';
import { ProfileComponent } from './component/page/profile/profile.component';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent}
  // {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
