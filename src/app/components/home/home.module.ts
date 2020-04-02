import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {HomeComponent} from './home.component';
import {MaterialModule} from '../../material/material.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    // StoreModule.forFeature('users', userReducer),
    // EffectsModule.forFeature([UserEffects])
  ]
})
export class HomeModule { }
