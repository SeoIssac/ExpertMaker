package DB.Tables;
import javax.persistence.*;

@Entity
public class Questions {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;
    private String Level;
    private int Qnum;
    private String Question;
    private String Usable_Functions;

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public String getLevel() {
        return Level;
    }

    public void setLevel(String level) {
        Level = level;
    }

    public int getQnum() {
        return Qnum;
    }

    public void setQnum(int qnum) {
        Qnum = qnum;
    }

    public String getQuestion() {
        return Question;
    }

    public void setQuestion(String question) {
        Question = question;
    }

    public String getUsable_Functions() {
        return Usable_Functions;
    }

    public void setUsable_Functions(String usable_Functions) {
        Usable_Functions = usable_Functions;
    }
}
