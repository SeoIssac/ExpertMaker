package DB.Repository;
import DB.Tables.Answers;

import java.util.Optional;
public interface Expert_Answers {
    Optional<Answers> findById(int ID);
}

