package DB;
import java.sql.*;
public class Handler implements DBLoader {
    @Override
    public ResultSet Load_Functions(){
        ResultSet rs = null;
        try {
            Connection conn = DriverManager.getConnection(
                    "jdbc:mysql://expertmaker.cj04x3wwgbp0.ap-northeast-2.rds.amazonaws.com:3306/expertname",
                    "root",
                    "qwer1234^^"
            );

            Statement stmt = conn.createStatement();
            rs = stmt.executeQuery(
                    "select Function_Name, Function_Info from Functions;"
            );
            return rs;
        } catch (SQLException e) {
            e.printStackTrace();
            return rs;
        }
    }
    @Override
    public ResultSet Search_Functions(String Keyword) {
        ResultSet rs = null;
        try {
            Connection conn = DriverManager.getConnection(
                    "jdbc:mysql://expertmaker.cj04x3wwgbp0.ap-northeast-2.rds.amazonaws.com:3306/expertname",
                    "root",
                    "qwer1234^^"
            );

            Statement stmt = conn.createStatement();
            rs = stmt.executeQuery(
                    "select Function_Name, Function_Info from Functions where Function_Name LIKE '%" + Keyword
                            + "%' or Function_Info LIKE '%" + Keyword + "%';"
            );
            return rs;
        } catch (SQLException e) {
            e.printStackTrace();
            return rs;
        }
    }
    @Override
    public ResultSet Load_Questions(int ID){
        ResultSet rs = null;
        try {
            Connection conn = DriverManager.getConnection(
                    "jdbc:mysql://expertmaker.cj04x3wwgbp0.ap-northeast-2.rds.amazonaws.com:3306/expertname",
                    "root",
                    "qwer1234^^"
            );

            Statement stmt = conn.createStatement();
            rs = stmt.executeQuery(
                    "select Question, Usable_Functions from Questions where ID = " + ID + ";"
            );
            return rs;
        } catch (SQLException e) {
            e.printStackTrace();
            return rs;
        }
    }
    @Override
    public ResultSet Load_Answers(int QID){
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
    @Override
    public ResultSet Load_Hints(int QID){
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
}
