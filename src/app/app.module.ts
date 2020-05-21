import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { SectionComponent } from "./section/section.component";
import { HerramientasComponent } from "./section/herramientas/herramientas.component";
import { CaracteristicasComponent } from "./section/caracteristicas/caracteristicas.component";
import { HomeComponent } from "./section/home/home.component";

//constante con arreglo y las rutas
const routes: Routes = [
  { path: "", redirectTo:"/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "caracteristicas", component: CaracteristicasComponent },
  { path: "herramientas", component: HerramientasComponent }

]
@NgModule({

//se registran
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    HerramientasComponent,
    CaracteristicasComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],//servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
