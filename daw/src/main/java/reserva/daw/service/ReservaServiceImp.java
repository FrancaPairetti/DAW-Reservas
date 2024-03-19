package reserva.daw.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reserva.daw.model.Espacio;
import reserva.daw.model.Reserva;
import reserva.daw.persistence.ReservaRepositorio;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ReservaServiceImp implements ReservaService{

    @Autowired
    private ReservaRepositorio reservaRepositorio;
    @Override
    public Reserva registerReserva(Reserva r) {

        ArrayList<Reserva> reservasEncontradas = (ArrayList<Reserva>) getPorEspacioYFechas(r.getEspacios(), r.getFechaInicioReserva(), r.getFechaFinReserva());
        if (!reservasEncontradas.isEmpty()) {
            throw new IllegalArgumentException("YA EXISTE UNA RESERVA PARA ESA FECHA");
        }

        r.setFechaHoraReserva(r.getFechaHoraReserva());
        r.setFechaInicioReserva(r.getFechaInicioReserva()); // Establecer la fecha de reserva proporcionada desde el frontend
        r.setFechaFinReserva(r.getFechaFinReserva()); // Establecer la fecha fin de reserva proporcionada desde el frontend

        return reservaRepositorio.save(r);
    }

    @Override
    public Reserva updateReserva(Reserva r) {
        ArrayList<Reserva> reservasEncontradas = (ArrayList<Reserva>) getPorEspacioYFechas(r.getEspacios(), r.getFechaInicioReserva(), r.getFechaFinReserva());

        if (!reservasEncontradas.isEmpty()) {
            for (Reserva reservaEncontrada : reservasEncontradas) {
                if (!reservaEncontrada.getId().equals(r.getId())) {
                    throw new IllegalArgumentException("YA EXISTE UNA RESERVA PARA ESA FECHA");
                }
            }
        }

        Reserva reservaExistente = reservaRepositorio.findById(r.getId()).orElse(null);
        if (reservaExistente != null) {
            if (r.getFechaInicioReserva().equals(reservaExistente.getFechaInicioReserva())) {
                r.setFechaInicioReserva(reservaExistente.getFechaInicioReserva());
            }
            if (r.getFechaFinReserva().equals(reservaExistente.getFechaFinReserva())) {
                r.setFechaFinReserva(reservaExistente.getFechaFinReserva());
            }
        }

        return reservaRepositorio.save(r);
    }

    @Override
    public String deleteReserva(Integer id) {
        reservaRepositorio.deleteById(id);
        return "Se ha eliminado con éxito";
    }

    @Override
    public List<Reserva> getReserva() {

        return reservaRepositorio.findAll();
    }

    @Override
    public Optional<Reserva> listarReservaId(int id) {

        return reservaRepositorio.findById(id);
    }

    @Override
    public Iterable<Reserva> getPorEspacio(Espacio espacio) {
        return reservaRepositorio.findByEspacios(espacio);
    }

    @Override
    public ArrayList<Reserva> getPorEspacioYFechas(Espacio espacio, Date inicio, Date fin) {
        ArrayList<Reserva> reservasfiltradas = new ArrayList<Reserva>();
        Iterable<Reserva> reservas = getPorEspacio(espacio);
        for (Reserva reserva : reservas) {
            if(inicio.equals(reserva.getFechaInicioReserva()) || fin.equals(reserva.getFechaFinReserva()) ||
                    inicio.after(reserva.getFechaInicioReserva()) && inicio.before(reserva.getFechaFinReserva()) ||
                    fin.after(reserva.getFechaInicioReserva()) && fin.before(reserva.getFechaFinReserva()) ) {

                reservasfiltradas.add(reserva);

            }
        }
        return reservasfiltradas;
    }

    @Override
    public Iterable<Reserva> getPorReservante(String reservante) {
        return reservaRepositorio.findByPersonasNameContainingIgnoreCaseOrPersonasApellidoContainingIgnoreCase(reservante , reservante);
    }

    @Override
    public Iterable<Reserva> getPorEspacioNombre(String espacio) {
        return reservaRepositorio.findByEspaciosNombreContainingIgnoreCase(espacio);
    }

    @Override
    public Iterable<Reserva> getPorReservanteYEspacio(String espacio, String reservante) {
        return reservaRepositorio.findByEspaciosNombreContainingIgnoreCaseAndPersonasNameContainingIgnoreCaseOrPersonasApellidoContainingIgnoreCase(espacio,reservante , reservante );
    }


}
