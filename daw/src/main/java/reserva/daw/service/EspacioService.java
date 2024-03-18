package reserva.daw.service;

import reserva.daw.model.Espacio;
import reserva.daw.model.Rol;

import java.util.List;
import java.util.Optional;

public interface EspacioService {
    Espacio registerEspacio(Espacio e);

    Espacio updateEspacio(Espacio e);

    String deleteEspacio(Integer id);

    List<Espacio> getEspacio();

    Optional<Espacio> listarEspacioId(int id);

    List<Espacio> getEspacioFiltroNombre(String nombre);

    List<Espacio> getEspacioFiltroCapacidad(String capacidad);

    List<Espacio> getEspacioFiltroNombreCapacidad(String nombre, String capacidad);
}
