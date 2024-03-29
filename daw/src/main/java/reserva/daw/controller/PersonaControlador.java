package reserva.daw.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reserva.daw.model.Espacio;
import reserva.daw.model.Persona;
import reserva.daw.service.PersonaService;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/persona"})
public class PersonaControlador {

    @Autowired
    PersonaService service;

    @GetMapping("/listarPersonas")
    public List<Persona> listar(){
        return service.listar();
    }

    @PostMapping("/registrarPersona")
    public Persona agregar(@RequestBody Persona p){
        return service.add(p);
    }

    @GetMapping(path = {"/listarPersonas/{id}"})
    public Optional<Persona> listarId(@PathVariable("id") int id){
        return service.listarId(id);
    }

    @PutMapping("/modificarPersona/{id}")
    public Persona editar(@RequestBody Persona p, @PathVariable("id") int id){
        p.setId(id);
        return service.edit(p);
    }

    @DeleteMapping("/eliminarPersona")
    public void delete(@RequestParam Integer id) {

        service.delete(id);
    }

    @GetMapping(value = "/search",params={"name"})
    public List<Persona> getPersonaFiltroName(@RequestParam(name="name",required = true)String name){
        return service.getPersonaFiltroName(name);
    }
    @GetMapping(value = "/search",params={"apellido"})
    public List<Persona> getPersonaFiltroApellido(@RequestParam(name="apellido",required = true)String apellido){
        return service.getPersonaFiltroApellido(apellido);
    }

    @GetMapping(value = "/search",params={"name", "apellido"})
    public List<Persona> getPersonaFiltroNameYApellido(@RequestParam(name="name",required = true)String name,
                                                         @RequestParam(name="apellido",required= true)String apellido){
        return service.getPersonaFiltroNameYApellido(name,apellido);
    }



}
