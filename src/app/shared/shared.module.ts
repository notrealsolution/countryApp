import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    HomePageComponent
  ],
  exports:[
    AboutPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
