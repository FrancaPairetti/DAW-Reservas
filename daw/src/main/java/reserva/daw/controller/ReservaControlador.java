package reserva.daw.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reserva.daw.model.Reserva;
import reserva.daw.model.Rol;
import reserva.daw.service.ReservaService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping({"/reservas"})
@RequiredArgsConstructor
public class ReservaControlador {

    @Autowired
    ReservaService reservaService;

    @PostMapping("/registrarReserva")
    public Reserva registerReserva(@RequestBody Reserva r){

        return reservaService.registerReserva(r);
    }

    @GetMapping("/listarReservas")
    public List<Reserva> getReserva(){

        return reservaService.getReserva();
    }

    @GetMapping(path = {"/listarReservas/{id}"})
    public Optional<Reserva> listarResevasId(@PathVariable("id") int id){
        return reservaService.listarReservaId(id);
    }

    @DeleteMapping("/eliminarReserva")
    public  void deleteRol(@RequestParam Integer id){

        reservaService.deleteReserva(id);
    }

    @PutMapping("/modificarReserva/{id}")
    public Reserva updateReserva(@RequestBody Reserva r, @PathVariable("id") int id){
        r.setId(id);
        return reservaService.updateReserva(r);
    }
}
