import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreloginRoutingModule } from './prelogin-routing.module';
import { LoginComponent } from './components/login/login.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
//import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    PreloginRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    // MatButtonModule

  ]
})
export class PreloginModule { }
