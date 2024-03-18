import { Component, OnInit } from '@angular/core';
import { Persona } from '../Modelo/Persona';
import { ServicePersonaService } from '../Service/service-persona.service';
import { Router } from '@angular/router';
import { ServiceRolService } from '../Service/service-rol.service';
import { Rol } from '../Modelo/Rol';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  personas:Persona[] | undefined;
  persona: Persona= new Persona();


  rolesArray:Rol[] | undefined;
  constructor(private service:ServicePersonaService, private router:Router , private rolService:ServiceRolService){}

  ngOnInit() {
    this.service.getPersonas()
    .subscribe(data=>{
      this.personas = data;
    })

    this.rolService.getRoles()
    .subscribe(data=>{
      this.rolesArray = data;
    })


  }

  GuardarPersona(persona:Persona){
    this.service.createPersona(persona)
    .subscribe(data =>{
      alert("Se agregó una nueva persona con éxito!");
      window.location.reload();
    })

  }



  EliminarPersona(persona:Persona){
    this.service.deletePersona(persona)
    .subscribe(data=>{
      this.personas=this.personas?.filter(p=>p!==persona)
      alert("Persona eliminada con éxito!");
    })
  }

  EditarPersona(persona:Persona):void{
    localStorage.setItem('id', persona.id?.toString());
  }

  ObtenerDatosPersona(p: Persona): void {
    this.EditarPersona(p);
    let id = localStorage.getItem("id");
    if (id !== null) {
      this.service.getPersonasId(+id)
        .subscribe(data => {
          this.persona = data;
        });
    }
  }



  selectedRoleId: number | undefined;

  ActualizarPersona(persona:Persona){
    // Asignar el ID del rol seleccionado a la propiedad persona.roles.id
    persona.roles = { id: this.selectedRoleId } as Rol;
    this.service.updatePersona(persona)
    .subscribe(data=>{
      console.log(data);
      this.persona=data;
      alert("Se actualizó con éxito");
      window.location.reload();
    })
  }



}
