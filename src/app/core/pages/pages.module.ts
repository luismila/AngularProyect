//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages.routing';

import { ByeComponent } from './bye/bye.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ByeComponent, 
    HomeComponent
  ],
  imports: [
//    BrowserModule,
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
