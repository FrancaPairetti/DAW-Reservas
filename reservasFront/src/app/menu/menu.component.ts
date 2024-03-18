import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private router:Router){}

  Rol(){
    this.router.navigate(["rol"]);
  }

  Espacio(){
    this.router.navigate(["espacios"]);
  }

  Persona(){
    this.router.navigate(["personas"]);
  }

  Reserva(){
    this.router.navigate(["reservas"]);
  }

}
