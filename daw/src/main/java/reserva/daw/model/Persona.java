package reserva.daw.model;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED, force = true)
@Table(name = "persona")
public class Persona extends ObjectDB {

    private String name;

    private String apellido;

    private Integer dni;

    private String tel;

    @ManyToOne
    private Rol roles;
}
