import { Component, OnInit } from '@angular/core';
import { Rol } from '../Modelo/Rol';
import { Router } from '@angular/router';
import { ServiceRolService } from '../Service/service-rol.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {

  roles:Rol[] | undefined;
  rol: Rol= new Rol();

  constructor(private service:ServiceRolService, private router:Router){}

  ngOnInit() {
    this.service.getRoles()
    .subscribe(data=>{
      //console.log("roles todos"+data);
      this.roles = data;
    })
  }

  BuscarPorNombreRol(){
    const nameFiltroInput = (document.getElementById('filtroNombre') as HTMLInputElement);
    const name = nameFiltroInput.value;
    if (name !== null && name.trim() !== '') { // Asegúrate de que el nombre no esté vacío
      this.service.getRolNombre(name)
      .subscribe(data=>{
        //console.log("roles todos"+data);
        this.roles = data;
      })
    } else {
      //console.log('Nombre de filtro no válido');
      this.service.getRoles()
      .subscribe(data=>{
        //console.log("roles todos"+data);
        this.roles = data;
      })
    }

  }

  GuardarRol(rol:Rol){
    this.service.createRol(rol)
    .subscribe(data =>{
      alert("Se agregó un nuevo rol con éxito!");
      window.location.reload();
    })

  }

  EditarRol(rol:Rol):void{
    localStorage.setItem('id', rol.id?.toString());
  }

  EliminarRol(rol:Rol){
    this.service.deleteRol(rol)
    .subscribe(data=>{
      this.roles=this.roles?.filter(p=>p!==rol)
      alert("Rol eliminado con éxito!");
    })
  }

  ObtenerDatosRol(r:Rol){
    this.EditarRol(r);
    let id=localStorage.getItem("id");
    if (id !== null) {
      this.service.getRolId(+id)
      .subscribe(data=>{
        this.rol=data;
      })
    }
  }

  ActualizarRol(rol:Rol){
    this.service.updateRol(rol)
    .subscribe(data=>{
      this.rol=data;
      alert("Se actualizó con exito");
      window.location.reload();
    })

  }



}
