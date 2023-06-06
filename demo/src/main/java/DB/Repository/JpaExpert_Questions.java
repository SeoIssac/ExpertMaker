package DB.Repository;
import DB.Tables.*;
import javax.persistence.*;
import java.util.Optional;
import java.util.List;
import org.springframework.stereotype.Repository;
@Repository
public class JpaExpert_Questions implements Expert_Questions {
    @PersistenceContext
    private final EntityManager em; //DB와의 통신을 처리. JPA를 쓸려면 Entity Manger을 주입받아야 함.

    public JpaExpert_Questions(EntityManager em) {
        this.em = em;
    }
    @Override
    public Optional<Questions> findById(int ID) {
        Questions questions = em.find(Questions.class, ID);
        return Optional.ofNullable(questions); // 값이 없을 수도 있으므로
    }

    @Override
    public List<Questions> findAll(){
        return em.createQuery("select m from Questions m", Questions.class).getResultList();
    }
}
