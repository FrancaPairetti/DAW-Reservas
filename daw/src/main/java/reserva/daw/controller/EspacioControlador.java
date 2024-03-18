package reserva.daw.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reserva.daw.model.Espacio;
import reserva.daw.service.EspacioService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping({"/espacios"})
@RequiredArgsConstructor
public class EspacioControlador {

    @Autowired
    EspacioService espacioService;

    @PostMapping("/registrarEspacio")
    public Espacio registerEspacio(@RequestBody Espacio e){
        return espacioService.registerEspacio(e);
    }

    @GetMapping("/listarEspacios")
    public List<Espacio> getEspacio(){
        return espacioService.getEspacio();
    }

    @GetMapping(path = {"/listarEspacios/{id}"})
    public Optional<Espacio> listarEspacioId(@PathVariable("id") int id){
        return espacioService.listarEspacioId(id);
    }

    @DeleteMapping("/eliminarEspacio")
    public  void deleteEspacio(@RequestParam Integer id){
        espacioService.deleteEspacio(id);
    }

    @PutMapping("/modificarEspacio/{id}")
    public Espacio updateEspacio(@RequestBody Espacio e, @PathVariable("id") int id){
        e.setId(id);
        return espacioService.updateEspacio(e);
    }

    @GetMapping(value = "/search",params={"nombre"})
    public List<Espacio> getEspacioFiltroNombre(@RequestParam(name="nombre",required = true)String nombre){
        return espacioService.getEspacioFiltroNombre(nombre);
    }
    @GetMapping(value = "/search",params={"capacidad"})
    public List<Espacio> getEspacioFiltroCapacidad(@RequestParam(name="capacidad",required = true)String capacidad){
        return espacioService.getEspacioFiltroCapacidad(capacidad);
    }

    @GetMapping(value = "/search",params={"nombre","capacidad"})
    public List<Espacio> getEspacioFiltroNombreCapacidad(@RequestParam(name="nombre",required = true)String nombre,
                                                  @RequestParam(name="capacidad",required= true)String capacidad){
        return espacioService.getEspacioFiltroNombreCapacidad(nombre,capacidad);
    }

}
