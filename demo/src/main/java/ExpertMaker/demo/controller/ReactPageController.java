package ExpertMaker.demo.controller;

import org.jooq.tools.json.JSONArray;
import org.jooq.tools.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class ReactPageController {

    @GetMapping("function_dic")
    public String dictionary(){
        return "FunctionDic";
    }

    @GetMapping("/question/BEGINNER")
    public JSONArray beginnerExample() {
        JSONArray jsonArray = new JSONArray();

        String[] answer1 = new String[]{"DAYS(C3,B3)", "DAYS(\"2023-6-12\",\"2023-5-4\")"};
        JSONObject object1 = new JSONObject();
        object1.put("question",
                "중간고사 시험 공부가 하기 싫었던 홍길동 학생은 종강까지 앞으로 며칠 남았는지 계산해보려고 합니다." +
                        " DAYS 함수를 사용해서 오늘부터 종강일까지 며칠 남았는지 계산해주세요.");
        object1.put("answer", answer1);
        object1.put("usable_functions", "DAYS()");

        String[] answer2 = new String[]{"SUM(C3:C5)", "SUM(8500,3400,12600)", "SUM(C3,C4,C5)"};
        JSONObject object2 = new JSONObject();
        object2.put("question",
                "홍길동 학생은 시험이 끝난 기념으로 놀다가 집에 돌아왔습니다. " +
                        "영수증의 합계를 더해서 오늘 하루 동안 얼마나 돈을 썼는지 계산하고자 할 때, SUM 함수를 사용해서 합계를 계산해주세요.");
        object2.put("answer", answer2);
        object2.put("usable_functions", "SUM()");

        jsonArray.add(object1);
        jsonArray.add(object2);

        return jsonArray;
    }

    @GetMapping("/question/JUNIOR")
    public JSONArray juniorExample() {
        JSONArray jsonArray = new JSONArray();

        String[] answer1 = new String[]{"ROUND(AVERAGE(12,54,33,64,73),0)"};
        JSONObject object1 = new JSONObject();
        object1.put("question",
                "나이가 각각 12,54,33,64,73인 사람들이 있습니다. 이 사람들의 나이의 평균을 구한 후, 일의자리까지 반올림해주세요.");
        object1.put("answer", answer1);
        object1.put("usable_functions", "ROUND(), AVERAGE()");

        String[] answer2 = new String[]{"TRUNC(SQRT(C1)*C2))"};
        JSONObject object2 = new JSONObject();
        object2.put("question",
                "어떤 회사의 성과금이 √(호봉) * 기본급일 때 호봉과 기본급을 이용하여 성과금을 구하는 함수를 만들어주세요.");
        object2.put("answer", answer2);
        object2.put("usable_functions", "TRUNC(), SQRT()");

        jsonArray.add(object1);
        jsonArray.add(object2);

        return jsonArray;
    }
}
