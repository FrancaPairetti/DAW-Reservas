import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Espacio } from '../Modelo/Espacio';

@Injectable({
  providedIn: 'root'
})
export class ServiceEspacioService {

  constructor(private http:HttpClient) { }

  UrlEspacio='http://localhost:8080/espacios';

  //Espacio
  getEspacioes(){
    return this.http.get<Espacio[]>(this.UrlEspacio+"/listarEspacios");
  }

  createEspacio(Espacio:Espacio){
    return this.http.post<Espacio>(this.UrlEspacio+"/registrarEspacio", Espacio)
  }

  deleteEspacio(Espacio:Espacio){
    return this.http.delete<Espacio>(this.UrlEspacio + "/eliminarEspacio?id= "+Espacio.id);
  }

  getEspacioId(id:number){
    return this.http.get<Espacio>(this.UrlEspacio+"/listarEspacios/"+id);
  }
  updateEspacio(Espacio:Espacio){
    return this.http.put<Espacio>(this.UrlEspacio+"/modificarEspacio/"+Espacio.id, Espacio);
  }

  //agregar lo de filtros por nombre y capacidad
}
