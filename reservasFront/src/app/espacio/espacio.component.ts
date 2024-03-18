import { Component, OnInit } from '@angular/core';
import { Espacio } from '../Modelo/Espacio';
import { ServiceEspacioService } from '../Service/service-espacio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-espacio',
  templateUrl: './espacio.component.html',
  styleUrls: ['./espacio.component.css']
})
export class EspacioComponent implements OnInit {

  espacios:Espacio[] | undefined;
  espacio: Espacio= new Espacio();

  constructor(private service:ServiceEspacioService, private router:Router){}

  ngOnInit() {
    this.service.getEspacioes()
    .subscribe(data=>{
      this.espacios = data;
    })
  }

  GuardarEspacio(espacio:Espacio){
    this.service.createEspacio(espacio)
    .subscribe(data =>{
      alert("Se agregó un nuevo espacio con éxito!");
      window.location.reload();
    })

  }

  EditarEspacio(espacio:Espacio):void{
    localStorage.setItem('id', espacio.id?.toString());
  }

  EliminarEspacio(espacio:Espacio){
    this.service.deleteEspacio(espacio)
    .subscribe(data=>{
      this.espacios=this.espacios?.filter(p=>p!==espacio)
      alert("Espacio eliminado con éxito!");
    })
  }

  ObtenerDatosEspacio(e : Espacio){
    this.EditarEspacio(e);
    let id=localStorage.getItem("id");
    if (id !== null) {
      this.service.getEspacioId(+id)
      .subscribe(data=>{
        this.espacio=data;
      })
    }
  }

  ActualizarEspacio(espacio:Espacio){
    this.service.updateEspacio(espacio)
    .subscribe(data=>{
      this.espacio=data;
      alert("Se actualizó con exito");
      window.location.reload();
    })

  }
}
