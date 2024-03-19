import { Component, OnInit } from '@angular/core';
import { Reserva } from '../Modelo/Reserva';
import { Persona } from '../Modelo/Persona';
import { Espacio } from '../Modelo/Espacio';
import { ServiceReservaService } from '../Service/service-reserva.service';
import { ServicePersonaService } from '../Service/service-persona.service';
import { ServiceEspacioService } from '../Service/service-espacio.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  reservas:Reserva[] | undefined;
  reserva: Reserva= new Reserva();


  personasArray:Persona[] | undefined;

  espaciosArray:Espacio[] | undefined;


  constructor(private service:ServiceReservaService, private datePipe: DatePipe, private personaService:ServicePersonaService, private espacioService : ServiceEspacioService){}

  ngOnInit() {
    this.service.getReservas()
    .subscribe(data=>{
      this.reservas = data;
    })

    this.personaService.getPersonas()
    .subscribe(data=>{
      this.personasArray = data;
    })

    this.espacioService.getEspacioes()
    .subscribe(data=>{
      this.espaciosArray = data;
    })


  }

  GuardarReserva(reserva:Reserva){

    // Formatear fechaHoraReserva
    const currentDate = new Date();
    const formattedDateFechaHoraReserva: string | null = this.datePipe.transform(currentDate, 'yyyy-MM-ddTHH:mm:ss');
    reserva.fechaHoraReserva = formattedDateFechaHoraReserva ? new Date(formattedDateFechaHoraReserva) : undefined;

    // Formatear fechaInicioReserva
    const formattedDateFechaInicio: string | null = this.datePipe.transform(reserva.fechaInicioReserva, 'yyyy-MM-ddTHH:mm:ss');
    reserva.fechaInicioReserva = formattedDateFechaInicio ? new Date(formattedDateFechaInicio) : undefined;

    // Formatear fechaFinReserva
    const formattedDateFechaFin: string | null = this.datePipe.transform(reserva.fechaFinReserva, 'yyyy-MM-ddTHH:mm:ss');
    reserva.fechaFinReserva = formattedDateFechaFin ? new Date(formattedDateFechaFin) : undefined;

    this.service.createReserva(reserva)
    .subscribe(
      (data) => {
        console.log('Reserva registrada correctamente:', data);
        alert("Se agregó una nueva reserva con éxito!");
        window.location.reload();
      },
      (error) => {
        console.error('Error al registrar la reserva:', error);
        alert('Error al registrar la reserva: Ya existe una reserva en ese horario');
      }
    )

  }



  EliminarReserva(reserva:Reserva){
    this.service.deleteReserva(reserva)
    .subscribe(data=>{
      this.reservas=this.reservas?.filter(p=>p!==reserva)
      alert("Reserva eliminada con éxito!");
    })
  }

  EditarReserva(reserva:Reserva):void{
    localStorage.setItem('id', reserva.id?.toString());
  }

  ObtenerDatosReserva(r: Reserva): void {
    this.EditarReserva(r);
    let id = localStorage.getItem("id");
    if (id !== null) {
      this.service.getReservaId(+id)
        .subscribe(data => {
          // Antes de asignar la fecha del objeto reserva al campo, formatearla para eliminar la zona horaria
          const formattedFechaInicioReserva :  string | null = this.datePipe.transform(data.fechaInicioReserva, 'yyyy-MM-ddThh:mm');
          data.fechaInicioReservaEdit=formattedFechaInicioReserva? formattedFechaInicioReserva : undefined;


          // Hacer lo mismo para la fecha de fin
          const formattedFechaFinReserva :  string | null = this.datePipe.transform(data.fechaFinReserva, 'yyyy-MM-ddThh:mm');
          data.fechaFinReservaEdit=formattedFechaFinReserva? formattedFechaFinReserva : undefined;
          this.reserva = data;
        });
    }
  }


  selectedPersonaId: number | undefined;
  selectedEspacioId: number | undefined;

  ActualizarReserva(reserva:Reserva){

    // Formatear fechaInicioReserva
    const formattedDateFechaInicio: string | null = this.datePipe.transform(reserva.fechaInicioReservaEdit, 'yyyy-MM-ddTHH:mm:ss');
    reserva.fechaInicioReserva = formattedDateFechaInicio ? new Date(formattedDateFechaInicio) : undefined;

    // Formatear fechaFinReserva
    const formattedDateFechaFin: string | null = this.datePipe.transform(reserva.fechaFinReservaEdit, 'yyyy-MM-ddTHH:mm:ss');
    reserva.fechaFinReserva = formattedDateFechaFin ? new Date(formattedDateFechaFin) : undefined;


    // Asignar el ID del rol seleccionado a la propiedad persona.roles.id
    // Asignar objeto persona seleccionado
    if (this.selectedPersonaId !== undefined) {
      reserva.personas = { id: this.selectedPersonaId } as Persona;
    }

    // Asignar objeto espacio seleccionado
    if (this.selectedEspacioId !== undefined) {
      reserva.espacios = { id: this.selectedEspacioId } as Espacio;
    }

    console.log(reserva);
    this.service.updateReserva(reserva)
    .subscribe(
      (data) => {
        console.log('Reserva actualizada correctamente:', data);
        alert("Se modifico la reserva con éxito!");
        window.location.reload();
      },
      (error) => {
        console.error('Error al modificar la reserva:', error);
        alert('Error al modificar la reserva: Ya existe una reserva en ese horario');
      }
    );
  }

  //FILTROS

  BuscarReservas(){
    const nameFiltroInput = (document.getElementById('filtroNombre') as HTMLInputElement);
    const name = nameFiltroInput.value;

    const espacioFiltroInput = (document.getElementById('filtroEspacio') as HTMLInputElement);
    const esp = espacioFiltroInput.value;
    if (name !== null && name.trim() !== ''  && (esp==null || esp.trim() == '')) { // Asegúrate de que el nombre no esté vacío
      this.service.getReservasReservante(name)
      .subscribe(data=>{
        //console.log("roles todos"+data);
        this.reservas = data;
      })
    }else if (esp!==null && esp.trim() !== '' && (name == null || name.trim() == '')){
      this.service.getReservasEspacio(esp)
      .subscribe(data=>{
        //console.log("roles todos"+data);
        this.reservas = data;
      })

    }else if(name !== null && name.trim() !== ''  && esp!==null && esp.trim() !== ''){
      this.service.getReservasReservanteYEspacio(name,esp)
      .subscribe(data=>{
        //console.log("roles todos"+data);
        this.reservas = data;
      })
    }else {
      //console.log('Nombre de filtro no válido');
      this.service.getReservas()
      .subscribe(data=>{
        //console.log("roles todos"+data);
        this.reservas= data;
      })
    }
  }
}
