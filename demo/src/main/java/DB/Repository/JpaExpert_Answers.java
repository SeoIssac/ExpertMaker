package DB.Repository;
import DB.Tables.*;
import javax.persistence.*;
import java.util.Optional;


public class JpaExpert_Answers implements Expert_Answers {
    private final EntityManager em; //DB와의 통신을 처리. JPA를 쓸려면 Entity Manger을 주입받아야 함.

    public JpaExpert_Answers(EntityManager em) {
        this.em = em;
    }

    @Override
    public Optional<Answers> findById(int ID) {
        Answers answers = em.find(Answers.class, ID);
        return Optional.ofNullable(answers); // 값이 없을 수도 있으므로
    }
}