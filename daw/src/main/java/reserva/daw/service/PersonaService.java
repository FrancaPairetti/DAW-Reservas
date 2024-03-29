package reserva.daw.service;

import reserva.daw.model.Espacio;
import reserva.daw.model.Persona;

import java.util.List;
import java.util.Optional;

public interface PersonaService {

    List<Persona>listar();

    Optional<Persona> listarId(int id);

    Persona add (Persona p);

    Persona edit (Persona p);

    String delete(Integer id);

    List<Persona> getPersonaFiltroName(String name);

    List<Persona> getPersonaFiltroApellido(String apellido);

    List<Persona> getPersonaFiltroNameYApellido(String name, String apellido);


}
