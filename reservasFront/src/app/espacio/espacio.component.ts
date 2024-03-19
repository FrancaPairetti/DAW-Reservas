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

  BuscarEspacios(){
    const nameFiltroInput = (document.getElementById('filtroNombre') as HTMLInputElement);
    const name = nameFiltroInput.value;

    const capacidadFiltroInput = (document.getElementById('filtroCapacidad') as HTMLInputElement);
    const cap = capacidadFiltroInput.value;
    if (name !== null && name.trim() !== '' && cap!==null && cap.trim() !== '') { // Asegúrate de que el nombre no esté vacío
      this.service.getEspaciosCapacidadNombre(name, cap)
      .subscribe(data=>{
        //console.log("roles todos"+data);
        this.espacios = data;
      })
    }else if (name !== null && name.trim() !== '' && (cap==null || cap.trim() == '') ){
      this.service.getEspaciosNombre(name)
      .subscribe(data=>{
        //console.log("roles todos"+data);
        this.espacios = data;
      })

    } else if (cap!==null && cap.trim() !== '' && (name == null || name.trim() == '')){
      this.service.getEspaciosCapacidad(cap)
      .subscribe(data=>{
        //console.log("roles todos"+data);
        this.espacios = data;
      })

    }else {
      //console.log('Nombre de filtro no válido');
      this.service.getEspacioes()
      .subscribe(data=>{
        //console.log("roles todos"+data);
        this.espacios = data;
      })
    }
  }
}
