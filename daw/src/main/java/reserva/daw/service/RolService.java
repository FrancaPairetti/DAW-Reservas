package reserva.daw.service;

import reserva.daw.model.Rol;

import java.util.List;
import java.util.Optional;

public interface RolService {

    Rol registerRol(Rol r);

    Rol updateRol (Rol r);

    String deleteRol(Integer id);

    List<Rol> getRoles();

    Optional<Rol> listarId(int id);

}
