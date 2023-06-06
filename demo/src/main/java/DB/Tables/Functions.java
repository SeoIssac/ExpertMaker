package DB.Tables;
import javax.persistence.*;

@Entity
public class Functions {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;
    private String Function_Name;
    private String Function_Info;

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public String getFunction_Name() {
        return Function_Name;
    }

    public void setFunction_Name(String function_Name) {
        Function_Name = function_Name;
    }

    public String getFunction_Info() {
        return Function_Info;
    }

    public void setFunction_Info(String function_Info) {
        Function_Info = function_Info;
    }
}
