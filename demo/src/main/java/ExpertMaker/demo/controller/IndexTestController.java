package ExpertMaker.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class IndexTestController {
    @GetMapping("/")
    public String main() {
        return "main.html";
    }

    @GetMapping("certificate")
    public String certificate() {
        return "certificate.html";
    }
    @GetMapping("question")
    public String question(@RequestParam(value = "level", defaultValue = "1") String level) {
        if(level.equals("2")) return "question_2.html";
        else if(level.equals("3")) return "question_3.html";

        return "question.html";
    }
    @GetMapping("function_dic")
    public String function_dictionary() {
        return "function_dic.html";
    }
}
