import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HomeLayoutModule } from '../ui/home-layout/home-layout.module';
import { HomeCardComponent } from '../ui/home-card/home-card.component';


@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, HomeCardComponent]
})
export class HomePageModule {}
