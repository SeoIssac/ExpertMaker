package DB.Repository;
import DB.Tables.Hints;

import java.util.Optional;
public interface Expert_Hints {
    Optional<Hints> findById(int ID);
}
