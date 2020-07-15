/*
* Componente para el modulo de medicina alternativa choco
* By : Ivan Basilio Ramirez
* CreateAt : 15/07/2020 - 01:14:30
*/

import { Component } from '@angular/core'

@Component( {
  selector: 'app-section-negocio',
  templateUrl: './negocio.component.html'
})
export class NegocioComponent {
 
  //datos de contacto 
  nombreTerapeuta : string = "Paulina Martinez";
  celTerapeuta: string = "5584988402";
  facebookTerapeuta = "https://www.facebook.com/ChocoMartinez007";
  
  //datos del lugar (posible atencion)
  direccion : string = "Calle 693 #76 San Juan de Aragón CTM, Ciudad de Mexico";
  
  //datos de trabajos que se realizan e el negocio
  acupuntura : string[]  = ["Agujas", "Electro Estimulacion", "Moxibución", "Reflexología Podal"];
  masajes: string[] = ["Linfatico", "Reductivo", "deportivo"];
  parteEstetica : string =  ["Aplicación de ácido hialurónico", "Plasma Rico en plaquetas", "Dermapen", "Hidrolipoclasia", "Peptonas"]; 
  otros : string[] = ["Mesoterapia","Terapia Neural","Mocrodosís"];
  
}
  
