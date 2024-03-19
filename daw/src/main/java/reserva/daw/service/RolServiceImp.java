package reserva.daw.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reserva.daw.model.Rol;
import reserva.daw.persistence.RolRepositorio;

import java.util.List;
import java.util.Optional;

@Service
public class RolServiceImp implements RolService {

    @Autowired
    private RolRepositorio repositorioRol;
    @Override
    public Rol registerRol(Rol r) {
        return repositorioRol.save(r);
    }

    @Override
    public Rol updateRol(Rol r) {
        return repositorioRol.save(r);
    }

    @Override
    public String deleteRol(Integer id) {
        repositorioRol.deleteById(id);
        return "Se ha eliminado con éxito";
    }

    @Override
    public List<Rol> getRoles() {
        return repositorioRol.findAll();
    }

    @Override
    public Optional<Rol> listarId(int id) {

        return repositorioRol.findById(id);
    }

    @Override
    public Iterable<Rol> findAllByNombreIgnoreCaseContains(String name) {
        return repositorioRol.findAllByNombreIgnoreCaseContains(name);
    }

}
