package reserva.daw.model;


import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED, force = true)
@Table(name = "reserva")
public class Reserva extends ObjectDB {

    private Date fechaInicioReserva;
    private Date fechaFinReserva;
    private Integer cantidadReserva;
    private String motivo;
    private Date fechaHoraReserva;

    @ManyToOne
    private Persona personas;
    @OneToOne
    private Espacio espacios;

    public Date getFechaInicioReserva() {
        return fechaInicioReserva;
    }

    public void setFechaInicioReserva(Date fechaInicioReserva) {
        this.fechaInicioReserva = fechaInicioReserva;
    }

    public Date getFechaFinReserva() {
        return fechaFinReserva;
    }

    public void setFechaFinReserva(Date fechaFinReserva) {
        this.fechaFinReserva = fechaFinReserva;
    }

    public Integer getCantidadReserva() {
        return cantidadReserva;
    }

    public void setCantidadReserva(Integer cantidadReserva) {
        this.cantidadReserva = cantidadReserva;
    }

    public String getMotivo() {
        return motivo;
    }

    public void setMotivo(String motivo) {
        this.motivo = motivo;
    }

    public Date getFechaHoraReserva() {
        return fechaHoraReserva;
    }

    public void setFechaHoraReserva(Date fechaHoraReserva) {
        this.fechaHoraReserva = fechaHoraReserva;
    }

    public Persona getPersonas() {
        return personas;
    }

    public void setPersonas(Persona personas) {
        this.personas = personas;
    }

    public Espacio getEspacios() {
        return espacios;
    }

    public void setEspacios(Espacio espacios) {
        this.espacios = espacios;
    }
}
