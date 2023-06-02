package DB;
import java.sql.*;
public class Handler {
    public static void main(String[] args) {
        try {
            Connection conn = DriverManager.getConnection(
                    "jdbc:mysql://expertmaker.cj04x3wwgbp0.ap-northeast-2.rds.amazonaws.com:3306/expertname",
                    "root",
                    "qwer1234^^"
            );

            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(
                    "select Qnum, Question, Usable_Functions from Questions where Level = 'BEGINNER' and Qnum = 1;"
            );

            while (rs.next()) {
                System.out.println(rs.getInt(1));
                System.out.println(rs.getString(2));
                System.out.println(rs.getString(3));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
