package reserva.daw.persistence;

import org.springframework.data.repository.CrudRepository;
import reserva.daw.model.Espacio;

import java.util.List;
import java.util.Optional;

public interface EspacioRepositorio extends CrudRepository<Espacio, Integer> {
    Optional<Espacio> findById(Integer id);

    List<Espacio> findAll();

    List<Espacio> findAllByNombreIgnoreCaseContains(String nombre);

    List<Espacio> findAllByCapacidad(String capacidad);

    List<Espacio> findAllByNombreIgnoreCaseContainsAndCapacidad(String nombre, String capacidad);
}
