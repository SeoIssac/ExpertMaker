package ExpertMaker.demo.controller;

import ExpertMaker.demo.model.LevelType;
import ExpertMaker.demo.model.Question;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloTestController {
    @GetMapping("/api/main")
    public String test() {
        return "Test";
    }

    /*@GetMapping("/api/test")
    public Question testQuestion() {
        return new Question(1, LevelType.BEGINNER, " 중간고사 시험 공부가 하기 싫었던 홍길동 학생은 종강까지 앞으로 며칠 남았는지 계산해보려고 합니다.\n" +
                "DAYS 함수를 사용해서 오늘부터 종강일까지 며칠 남았는지 계산해주세요.\n", "DAYS(C3,B3)", "", "");
    }*/
}
