package reserva.daw.persistence;


import jakarta.transaction.Transactional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import reserva.daw.model.Rol;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface RolRepositorio extends CrudRepository<Rol, Integer> {

    List <Rol> findAll();
    Optional<Rol> findById(Integer id);

    Iterable<Rol> findAllByNombreIgnoreCaseContains(String name);

}
