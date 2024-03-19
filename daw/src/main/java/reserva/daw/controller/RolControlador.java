package reserva.daw.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reserva.daw.model.Rol;
import reserva.daw.service.RolService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping({"/roles"})
@RequiredArgsConstructor
public class RolControlador {

    @Autowired
    RolService rolService;

    @PostMapping("/registrarRol")
    public Rol registerRol(@RequestBody Rol r){
        return rolService.registerRol(r);
    }

    @GetMapping("/listarRoles")
    public List<Rol> getRoles(){
        return rolService.getRoles();
    }

    @GetMapping(path = {"/listarRoles/{id}"})
    public Optional<Rol> listarId(@PathVariable("id") int id){
        return rolService.listarId(id);
    }

    @DeleteMapping("/eliminarRol")
    public  void deleteRol(@RequestParam Integer id){
        rolService.deleteRol(id);
    }

    @PutMapping("/modificarRol/{id}")
    public Rol upadateRol(@RequestBody Rol r, @PathVariable("id") int id){
        r.setId(id);
        return rolService.updateRol(r);
    }

    @GetMapping(path = {"/listarRoles/name/{name}"})
    public Iterable<Rol> listarName (@PathVariable("name") String name){
        return rolService.findAllByNombreIgnoreCaseContains(name);
    }
}
