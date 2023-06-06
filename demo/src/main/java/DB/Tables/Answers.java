package DB.Tables;
import javax.persistence.*;

@Entity
public class Answers {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;
    private String question_ID;
    private String Answer;

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public String getQuestion_ID() {
        return question_ID;
    }

    public void setQuestion_ID(String question_ID) {
        this.question_ID = question_ID;
    }

    public String getAnswer() {
        return Answer;
    }

    public void setAnswer(String answer) {
        Answer = answer;
    }
}
