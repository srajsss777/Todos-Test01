import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostloginRoutingModule } from './routing';
import { HomeComponent } from './components/home/component';
import {MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule, MatSortModule, MatDialogModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddeventComponent } from './components/addevent/component';



@NgModule({
  declarations: [HomeComponent, AddeventComponent],
  imports: [
    CommonModule,
    PostloginRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class PostloginModule { }
