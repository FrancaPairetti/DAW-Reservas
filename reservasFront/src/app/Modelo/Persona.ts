import { Rol } from "./Rol";

export class Persona{
  id!: number;
  name:String | undefined;
  apellido: String | undefined;
  dni:number | undefined;
  tel:number | undefined;
  roles:Rol | undefined;

}
