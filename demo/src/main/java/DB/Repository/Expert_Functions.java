package DB.Repository;
import DB.Tables.Functions;

import java.util.Optional;
public interface Expert_Functions {
    Optional<Functions> findById(int ID);
}

