/*
*/
import { Component } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})
export class HeaderComponent {
  title: string = "Desarrollo Independiente";
  menu: string[] = ["Angular","Caracteristicas","Herramientas"];
  linkGit: string = "https://github.com/Ivan-Basilio/app-ds-front";
  linkBlog: string = "https://desarrollo-independiente.blogspot.com/2020/05/desarrollo-de-aplicaciones-con-angular.html";
}
