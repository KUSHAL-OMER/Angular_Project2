import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GooglePayButtonModule } from '@google-pay/button-angular';

import { SectionsRoutingModule } from './sections-routing.module';
import { StoriesComponent } from './stories/stories.component';
import { PoemsComponent } from './poems/poems.component';
import { CompositionsComponent } from './compositions/compositions.component';


@NgModule({
  declarations: [StoriesComponent, PoemsComponent, CompositionsComponent],
  imports: [
    CommonModule,
    SectionsRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    GooglePayButtonModule
  ],
  exports: [StoriesComponent, PoemsComponent, CompositionsComponent]
})
export class SectionsModule { }
