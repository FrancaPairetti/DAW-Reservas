import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rol } from '../Modelo/Rol';

@Injectable({
  providedIn: 'root'
})
export class ServiceRolService {

  constructor(private http:HttpClient) { }

  UrlRol='http://localhost:8080/roles';

  //ROL
  getRoles(){
    return this.http.get<Rol[]>(this.UrlRol+"/listarRoles");
  }

  createRol(rol:Rol){
    return this.http.post<Rol>(this.UrlRol+"/registrarRol", rol)
  }

  deleteRol(rol:Rol){
    return this.http.delete<Rol>(this.UrlRol + "/eliminarRol?id= "+rol.id);
  }

  getRolId(id:number){
    return this.http.get<Rol>(this.UrlRol+"/listarRoles/"+id);
  }
  updateRol(rol:Rol){
    return this.http.put<Rol>(this.UrlRol+"/modificarRol/"+rol.id, rol);
  }

}
