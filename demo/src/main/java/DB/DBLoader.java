package DB;

import java.sql.ResultSet;

public interface DBLoader {
    public ResultSet Load_Functions();
    public ResultSet Search_Functions(String Keyword);
    public ResultSet Load_Questions(int ID);
    public ResultSet Load_Answers(int QID);
    public ResultSet Load_Hints(int QID);
}
