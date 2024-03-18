import { Espacio } from "./Espacio";
import { Persona } from "./Persona";

export class Reserva{

  id!: number;
  fechaInicioReserva: Date | undefined;
  fechaFinReserva: Date | undefined;
  cantidadReserva: number | undefined;
  motivo: string | undefined;
  fechaHoraReserva: Date | undefined;
  personas:Persona | undefined;
  espacios: Espacio | undefined;
  fechaInicioReservaEdit: string | undefined;
  fechaFinReservaEdit: string | undefined;

}
