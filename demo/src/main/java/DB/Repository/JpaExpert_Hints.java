package DB.Repository;
import DB.Tables.*;
import javax.persistence.*;
import java.util.Optional;


public class JpaExpert_Hints implements Expert_Hints {
    private final EntityManager em; //DB와의 통신을 처리. JPA를 쓸려면 Entity Manger을 주입받아야 함.

    public JpaExpert_Hints(EntityManager em) {
        this.em = em;
    }

    @Override
    public Optional<Hints> findById(int ID) {
        Hints hints = em.find(Hints.class, ID);
        return Optional.ofNullable(hints); // 값이 없을 수도 있으므로
    }
}