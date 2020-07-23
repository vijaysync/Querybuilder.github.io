import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
//import { QueryComponent } from './query/query.component';
import { FormsModule }   from '@angular/forms';
//import { QueryBuilderModule } from "angular2-query-builder";
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatSelectModule} from '@angular/material/select';
import { TabComponent } from './tab/tab.component';
import { AddcardComponent } from './addcard/addcard.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { DescriptionComponent } from './description/description.component';



@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    AddcardComponent,
    CardlistComponent,
    DescriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    DragDropModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
