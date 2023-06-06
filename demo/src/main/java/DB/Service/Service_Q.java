package DB.Service;

import DB.Tables.Questions;
import DB.Repository.Expert_Questions;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class Service_Q {
    private final Expert_Questions expert_questions;

    public Optional<Questions> Show_Question(int ID){
        return expert_questions.findById(ID);
    }
    public List<Questions> All_Questions(){
        return expert_questions.findAll();
    }
}
