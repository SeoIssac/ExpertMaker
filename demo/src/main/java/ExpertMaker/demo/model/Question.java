package ExpertMaker.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Question {

    private int id;

    @Enumerated(EnumType.STRING)
    private LevelType level;

    private String quest;

    private String answer;

    private String correctImgSrc;

    private String sheetImgSrc;


}
