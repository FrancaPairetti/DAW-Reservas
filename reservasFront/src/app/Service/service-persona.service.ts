import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServicePersonaService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/persona';
  getPersonas(){
    return this.http.get<Persona[]>(this.Url+"/listarPersonas");
  }

  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url+"/registrarPersona", persona)
  }

  //Editar
  getPersonasId(id:number){
    return this.http.get<Persona>(this.Url+"/listarPersonas/"+id);
  }
  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url+"/modificarPersona/"+persona.id, persona);
  }

  //eliminar
  deletePersona(persona:Persona){
    return this.http.delete<Persona>(this.Url + "/eliminarPersona?id= "+persona.id);
  }
}
