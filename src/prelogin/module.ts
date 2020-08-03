import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreloginRoutingModule } from './routing';
import { LoginComponent } from './components/login/component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    PreloginRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule

  ]
})
export class PreloginModule { }
