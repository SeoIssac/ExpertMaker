package DB;
import java.sql.*;
public class Handler {
    public static ResultSet Questions(String level, int qnum){
        ResultSet rs = null;
        try {
            Connection conn = DriverManager.getConnection(
                    "jdbc:mysql://expertmaker.cj04x3wwgbp0.ap-northeast-2.rds.amazonaws.com:3306/expertname",
                    "root",
                    "qwer1234^^"
            );

            Statement stmt = conn.createStatement();
            rs = stmt.executeQuery(
                    "select Qnum, Question, Usable_Functions from Questions where Level = '" + level
                    + "' and Qnum = "+ qnum + ";"
            );
            return rs;
        } catch (SQLException e) {
            e.printStackTrace();
            return rs;
        }
    }
    public static ResultSet Functions(String keyword){
        ResultSet rs = null;
        try {
            Connection conn = DriverManager.getConnection(
                    "jdbc:mysql://expertmaker.cj04x3wwgbp0.ap-northeast-2.rds.amazonaws.com:3306/expertname",
                    "root",
                    "qwer1234^^"
            );

            Statement stmt = conn.createStatement();
            rs = stmt.executeQuery(
                    "select Function_Name, Function_Info from Functions where Function_Name LIKE '%" + keyword
                            + "%' or Function_Info LIKE '%"+ keyword + "%';"
            );
            return rs;
        } catch (SQLException e) {
            e.printStackTrace();
            return rs;
        }
    }
    public static ResultSet Answers(String QID){
        ResultSet rs = null;
        try {
            Connection conn = DriverManager.getConnection(
                    "jdbc:mysql://expertmaker.cj04x3wwgbp0.ap-northeast-2.rds.amazonaws.com:3306/expertname",
                    "root",
                    "qwer1234^^"
            );

            Statement stmt = conn.createStatement();
            rs = stmt.executeQuery(
                    "select Answer from Answers where question_ID = " + QID + ";"
            );
            return rs;
        } catch (SQLException e) {
            e.printStackTrace();
            return rs;
        }
    }
    public static ResultSet Hints(String QID){
        ResultSet rs = null;
        try {
            Connection conn = DriverManager.getConnection(
                    "jdbc:mysql://expertmaker.cj04x3wwgbp0.ap-northeast-2.rds.amazonaws.com:3306/expertname",
                    "root",
                    "qwer1234^^"
            );

            Statement stmt = conn.createStatement();
            rs = stmt.executeQuery(
                    "select Hint from Hints where question_ID = " + QID + ";"
            );
            return rs;
        } catch (SQLException e) {
            e.printStackTrace();
            return rs;
        }
    }
    public static void main(String[] args) {
        try {
            /*ResultSet rs = Functions("SUM");
            while(rs.next()){
                String name = rs.getString(1);
                String info = rs.getString(2);
                System.out.println("Function name : " + name);
                System.out.println("Function Info : " +  info);
            }*/
            ResultSet rs = Questions("JUNIOR", 1);
            while(rs.next()) {
                int qnum = rs.getInt(1);
                String question = rs.getString(2);
                String UF = rs.getString(3);
                System.out.println("문제번호 : " + qnum);
                System.out.println("문제상황 : " + question);
                System.out.println("사용함수 : " + UF);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
