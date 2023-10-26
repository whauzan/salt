import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout.component';
import { NavbarModule } from 'src/app/shared/ui/navbar/navbar.module';
import { HomePageRoutingModule } from '../../feature/home-routing.module';
import { SidebarModule } from 'src/app/shared/ui/sidebar/sidebar.module';
import { FooterModule } from 'src/app/shared/ui/footer/footer.module';

@NgModule({
  declarations: [HomeLayoutComponent],
  imports: [CommonModule, NavbarModule, SidebarModule, FooterModule, HomePageRoutingModule],
  exports: [HomeLayoutComponent]
})
export class HomeLayoutModule { }
