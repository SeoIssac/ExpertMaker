import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';

import PageService from '../service/PageService.jsx';
import QuestionStyle from '../css/question.module.css';

import { Router, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";

function Question({history}) {
    const navigate = useNavigate();
    const params = useParams();
    const [ value, setValue ] = useState('=');
    const inputRef = useRef(null);
    const [ stage, setStage ] = useState(0);

    const [ quest, setQuest ] = useState('중간고사 시험 공부가 하기 싫었던 홍길동 학생은 종강까지 앞으로 며칠 남았는지 계산해보려고 합니다. DAYS 함수를 사용해서 오늘부터 종강일까지 며칠 남았는지 계산해주세요.');
    const [ answer, setAnswer ] = useState('=DAYS(C3,B3)');
    const [ useFunc, setFunc ] = useState('DAYS()');

    const [ problems, setProblems, getProblems ] = useState(null);

    const [ gifURL, setGif ] = useState('http://via.placeholder.com/910x510');
    const [ sheetURL, setSheet ] = useState('http://via.placeholder.com/850x400');

    const navigateToMain = () => {
      navigate("/");
    };

    useEffect(() => {
        if(params.level === "BEGINNER") {
            PageService.getBeginner().then((res) => {
                setProblems(res.data);

                setStage(0);
                setQuest(res.data[0].question);
                setAnswer(res.data[0].answer);
                setFunc(res.data[0].usable_functions);

                setGif('/img/answer/' + params.level + 'Answer' + (1) + '.gif');
                setSheet('/img/sheet/' + params.level + 'Sheet' + (1) + '.png');
            });

        } else if(params.level === "JUNIOR"){
            PageService.getJunior().then((res) => {
                setProblems(res.data);

                setStage(0);
                setQuest(res.data[0].question);
                setAnswer(res.data[0].answer);
                setFunc(res.data[0].usable_functions);

                setGif('/img/answer/' + params.level + 'Answer' + (1) + '.gif');
                setSheet('/img/sheet/' + params.level + 'Sheet' + (1) + '.png');
            });
        }

    }, []);

    const showCorrect = () => {
        //alert(value.replaceAll(" ", "").toUpperCase());
        for(let i = 0; i < answer.length; i++){
            if(value.replaceAll(" ", "").toUpperCase() === ("="+answer[i].replaceAll(" ", "").toUpperCase())){
                if((stage+1) >= problems.length) {
                    document.getElementById(QuestionStyle.answerGif).style.visibility = "visible";
                    setTimeout(()=>{ document.getElementById(QuestionStyle.levelClear).style.visibility = "visible"; }, 5000);
                    return;
                } else {
                    document.getElementById(QuestionStyle.answerGif).style.visibility = "visible";
                    setTimeout(()=>{ document.getElementById(QuestionStyle.correct).style.visibility = "visible"; }, 5000);
                    return;
                }
            }
        }

        alert("오답입니다. 다시 작성해보세요.");
    };

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const init = (i) => {
        setValue("=");
        let jsonObject = problems[i];

        setStage(i);
        setQuest(jsonObject.question);
        setAnswer(jsonObject.answer);
        setFunc(jsonObject.usable_functions);

        setGif('/img/answer/' + params.level + 'Answer' + (i+1) + '.gif');
        setSheet('/img/sheet/' + params.level + 'Sheet' + (i+1) + '.png');
    };

    const closeCorrect = () => {
        document.getElementById(QuestionStyle.correct).style.visibility = "hidden";
        document.getElementById(QuestionStyle.answerGif).style.visibility = "hidden";

        init(stage + 1);
    };

    const closeLevelClear = () => {
        document.getElementById(QuestionStyle.levelClear).style.visibility = "hidden";
        document.getElementById(QuestionStyle.answerGif).style.visibility = "hidden";

        init(0);
    };

    return (
    <React.Fragment>
       <div id={QuestionStyle.correct} className={QuestionStyle.questionModal}>
           <div>
               <h3>{params.level} {stage+1}번 문제</h3>
               <h1>CLEAR</h1>
               <a onClick={closeCorrect}>다음 문제로 이동</a>
               <Link to="/" >시작 화면으로</Link>
           </div>
       </div>
       <div id={QuestionStyle.levelClear} className={QuestionStyle.questionModal}>
          <div>
              <h3>{params.level}</h3>
              <h1>CLEAR</h1>
              <a onClick={closeLevelClear}>처음부터 풀어보기</a>
              <Link to="/" >시작 화면으로</Link>
          </div>
      </div>
       <header id={QuestionStyle.header}>
           <button type="button" id={QuestionStyle.previous} onClick={navigateToMain}>prev</button>
       </header>
       <div className={QuestionStyle.container}>
           <div className={[QuestionStyle.board, QuestionStyle.fullBoard].join(" ")}>
               <h1>{params.level} {stage+1}번 문제</h1>
               <p>
                   {quest}
                   <div className={QuestionStyle.useFunction}>
                       <span>{useFunc}</span>
                   </div>
               </p>
               <input type="text" id={QuestionStyle.answer} autofocus required value={value} onChange={onChange} ref={inputRef}/>
               <button type="submit" id={QuestionStyle.submit} onClick={showCorrect}>답안 제출</button>
           </div>
           <div className={QuestionStyle.halfBoards}>
               <div className={QuestionStyle.board}>
                   <h2>정답 화면</h2>
                   <img id={QuestionStyle.answerGif} src={gifURL}/>
               </div>
               <div className={QuestionStyle.board}>
                   <h2>엑셀 시트 자료</h2>
                   <img id={QuestionStyle.questionSheet} src={sheetURL}/>
               </div>
           </div>
       </div>
    </React.Fragment>
    );
}

export default Question;