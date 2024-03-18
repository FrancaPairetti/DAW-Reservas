package reserva.daw.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reserva.daw.model.Persona;
import reserva.daw.persistence.PersonaRepositorio;

import java.util.List;
import java.util.Optional;


@Service
public class PersonaServiceImp implements  PersonaService  {

    @Autowired
    private PersonaRepositorio repositorio;

    @Override
    public List<Persona> listar() {
        return repositorio.findAll();

    }

    @Override
    public Optional<Persona> listarId(int id) {

        return repositorio.findById(id);
    }

    @Override
    public Persona add(Persona p) {

        return repositorio.save(p);
    }

    @Override
    public Persona edit(Persona p) {

        return repositorio.save(p);
    }

    @Override
    public String delete(Integer id) {
        repositorio.deleteById(id);
        return "Se ha eliminado correctamente";
    }
}
