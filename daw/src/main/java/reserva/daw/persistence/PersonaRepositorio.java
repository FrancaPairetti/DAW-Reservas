package reserva.daw.persistence;

import jakarta.transaction.Transactional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import reserva.daw.model.Persona;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface PersonaRepositorio extends CrudRepository<Persona, Integer>{
    List<Persona> findAll();

    @Override
    Optional<Persona> findById(Integer id);

    List<Persona> findAllByNameIgnoreCaseContains(String name);

    List<Persona> findAllByApellidoIgnoreCaseContains(String apellido);

    List<Persona> findAllByNameIgnoreCaseContainsAndApellidoIgnoreCaseContains(String name, String apellido);

}
