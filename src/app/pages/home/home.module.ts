import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrevDirective } from './prev.directive';
import { NextDirective } from './next.directive';




@NgModule({
  declarations: [
    PrevDirective,
    NextDirective
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
