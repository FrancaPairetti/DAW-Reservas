package reserva.daw.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reserva.daw.model.Espacio;
import reserva.daw.persistence.EspacioRepositorio;

import java.util.List;
import java.util.Optional;

@Service
public class EspacioServiceImp implements EspacioService{
    @Autowired
    private  EspacioRepositorio repositorio;

    @Override
    public Espacio registerEspacio(Espacio e) {
        return repositorio.save(e);
    }

    @Override
    public Espacio updateEspacio(Espacio e) {
        return repositorio.save(e);
    }

    @Override
    public String deleteEspacio(Integer id) {
        repositorio.deleteById(id);
        return "Se eliminó con éxito";
    }

    @Override
    public List<Espacio> getEspacio() {
        return repositorio.findAll();
    }

    @Override
    public Optional<Espacio> listarEspacioId(int id) {
        return repositorio.findById(id);
    }

    @Override
    public List<Espacio> getEspacioFiltroNombre(String nombre) {
        return repositorio.findAllByNombreIgnoreCaseContains(nombre);
    }

    @Override
    public List<Espacio> getEspacioFiltroCapacidad(String capacidad) {
        return repositorio.findAllByCapacidad(capacidad);
    }

    @Override
    public List<Espacio> getEspacioFiltroNombreCapacidad(String nombre, String capacidad) {
        return repositorio.findAllByNombreIgnoreCaseContainsAndCapacidad(nombre,capacidad);
    }
}
