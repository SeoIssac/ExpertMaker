import DB.JDBC.*;

import java.sql.*;

public class test {
    public static void main(String[] args) {
        DBLoader DB = new Handler();
        ResultSet rs;

        try{
            rs = DB.Load_Questions(1);

            while(rs.next()){
                String question = rs.getString(1);
                String UF = rs.getString(2);
                System.out.println("문제상황 : " + question);
                System.out.println("사용함수 : " + UF);
            }

            rs = DB.Load_Answers(1);

            while(rs.next()){
                String answer = rs.getString(1);
                System.out.println("정답 : " + answer);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
