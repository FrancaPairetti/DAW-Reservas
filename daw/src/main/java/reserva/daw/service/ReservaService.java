package reserva.daw.service;

import reserva.daw.model.Espacio;
import reserva.daw.model.Reserva;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface ReservaService {
    Reserva registerReserva(Reserva r);

    Reserva updateReserva (Reserva r);

    String deleteReserva(Integer id);

    List<Reserva> getReserva();

    Optional<Reserva> listarReservaId(int id);

    Iterable<Reserva> getPorEspacio(Espacio espacio);

    Iterable<Reserva> getPorEspacioYFechas(Espacio espacio, Date inicio, Date fin);

}
