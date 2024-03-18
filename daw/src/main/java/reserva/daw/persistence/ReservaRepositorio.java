package reserva.daw.persistence;


import jakarta.transaction.Transactional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import reserva.daw.model.Espacio;
import reserva.daw.model.Reserva;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface ReservaRepositorio extends CrudRepository<Reserva, Integer> {


    Optional<Reserva> findById(Integer id);

    List<Reserva> findAll();
    public Iterable<Reserva> findByEspacios(Espacio espacios);

}
