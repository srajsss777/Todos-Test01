import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostloginRoutingModule } from './routing';
import { HomeComponent } from './components/home/component';
import {MatToolbarModule, MatButtonModule, MatIconModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PostloginRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PostloginModule { }
