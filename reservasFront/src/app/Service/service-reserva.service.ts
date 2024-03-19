import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reserva } from '../Modelo/Reserva';

@Injectable({
  providedIn: 'root'
})
export class ServiceReservaService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/reservas';
  getReservas(){
    return this.http.get<Reserva[]>(this.Url+"/listarReservas");
  }

  createReserva(reserva: Reserva){
    return this.http.post<Reserva>(this.Url+"/registrarReserva", reserva)
  }

  //Editar
  getReservaId(id:number){
    return this.http.get<Reserva>(this.Url+"/listarReservas/"+id);
  }
  updateReserva(reserva: Reserva){
    return this.http.put<Reserva>(this.Url+"/modificarReserva/"+reserva.id, reserva);
  }

  //eliminar
  deleteReserva(reserva: Reserva){
    return this.http.delete<Reserva>(this.Url + "/eliminarReserva?id= "+reserva.id);
  }

  //FILTROS
  getReservasReservante(reservante: string){
    return this.http.get<Reserva[]>(this.Url+`/search?reservante=${reservante}`);
  }

  getReservasEspacio(espacio: string){
    return this.http.get<Reserva[]>(this.Url+`/search?espacio=${espacio}`);
  }

  getReservasReservanteYEspacio(reservante: string , espacio:string){
    return this.http.get<Reserva[]>(this.Url+`/search?espacio=${espacio}&reservante=${reservante}`);
  }
}
