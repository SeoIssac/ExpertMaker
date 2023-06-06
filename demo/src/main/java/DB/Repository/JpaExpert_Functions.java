package DB.Repository;
import DB.Tables.*;
import javax.persistence.*;
import java.util.Optional;


public class JpaExpert_Functions implements Expert_Functions {
    private final EntityManager em; //DB와의 통신을 처리. JPA를 쓸려면 Entity Manger을 주입받아야 함.

    public JpaExpert_Functions(EntityManager em) {
        this.em = em;
    }

    @Override
    public Optional<Functions> findById(int ID) {
        Functions functions = em.find(Functions.class, ID);
        return Optional.ofNullable(functions); // 값이 없을 수도 있으므로
    }
}