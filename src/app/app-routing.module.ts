import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {AuthComponent} from './components/auth/auth.component';
import {HomeModule} from './components/home/home.module';


// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'signup', component: SignupComponent },
//   { path: '', component: HomeComponent },
//   { path: '**', redirectTo: '/' }
// ];
// const routes: Routes = [
//   {path: 'auth', component: AuthComponent},
//   // {path: 'users', loadChildren: '@app/features/user/user.module#UserModule'},
//   {
//     path: '',
//     component: HomeComponent
//   },
//   {path: '**', redirectTo: '/'}
//
// ];
const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  // {path: 'users', loadChildren: '@app/features/user/user.module#UserModule'},
  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {path: '**', redirectTo: '/'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
