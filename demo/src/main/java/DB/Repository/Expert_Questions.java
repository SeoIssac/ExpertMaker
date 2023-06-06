package DB.Repository;
import DB.Tables.Questions;

import java.util.Optional;
import java.util.List;
public interface Expert_Questions {
    Optional<Questions> findById(int ID); //ID로 문제를 찾음
    List<Questions> findAll();
}
