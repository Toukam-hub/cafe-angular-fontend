import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
];
