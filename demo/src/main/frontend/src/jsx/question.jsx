import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import QuestionStyle from '../css/question.module.css';
import { Router, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";

import Answer from '../img/answer/Beginner01Answer.gif';
import Sheet from '../img/sheet/Beginner01Sheet.png';

function Question({history}) {
    const navigate = useNavigate();
    const params = useParams();
    const [ value, setValue ] = useState('=');
    const inputRef = useRef(null);
    const [ stage, setStage ] = useState(1);
    const [ question, setQuest ] = useState('=');
    const [ answer, setAnswer ] = useState('=');

    const navigateToMain = () => {
      navigate("/");
    };

    const showCorrect = () => {
        if(value.replace(" ", "") === "=DAYS(C3,B3)"){
            if(stage === 2) {
                document.getElementById(QuestionStyle.answerGif).style.visibility = "visible";
                setTimeout(()=>{ document.getElementById(QuestionStyle.levelClear).style.visibility = "visible"; }, 5000);
            } else {
                document.getElementById(QuestionStyle.answerGif).style.visibility = "visible";
                setTimeout(()=>{ document.getElementById(QuestionStyle.correct).style.visibility = "visible"; }, 5000);
            }
        } else {
            alert("오답입니다. 다시 작성해보세요.");
        }
    };

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const init = () => {
        setValue("=");
        setStage(stage + 1);
    };

    const closeCorrect = () => {
        document.getElementById(QuestionStyle.correct).style.visibility = "hidden";
        document.getElementById(QuestionStyle.answerGif).style.visibility = "hidden";
        init();
    };

    const closeLevelClear = () => {
        document.getElementById(QuestionStyle.correct).style.visibility = "hidden";
        document.getElementById(QuestionStyle.answerGif).style.visibility = "hidden";

        setValue("=");
        setStage(1);
    };

    return (
    <React.Fragment>
       <div id={QuestionStyle.correct} className={QuestionStyle.questionModal}>
           <div>
               <h3>{params.level} {stage}번 문제</h3>
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
               <h1>{params.level} {stage}번 문제</h1>
               <p>
                   중간고사 시험 공부가 하기 싫었던 홍길동 학생은 종강까지 앞으로 며칠 남았는지 계산해보려고 합니다.<br/>
                   DAYS 함수를 사용해서 오늘부터 종강일까지 며칠 남았는지 계산해주세요.<br/>
                   <div className={QuestionStyle.useFunction}>
                       <span>DAYS(종료일, 시작일)</span>
                   </div>
               </p>
               <input type="text" id={QuestionStyle.answer} autofocus required value={value} onChange={onChange} ref={inputRef}/>
               <button type="submit" id={QuestionStyle.submit} onClick={showCorrect}>답안 제출</button>
           </div>
           <div className={QuestionStyle.halfBoards}>
               <div className={QuestionStyle.board}>
                   <h2>정답 화면</h2>
                   <img id={QuestionStyle.answerGif} src={Answer}/>
               </div>
               <div className={QuestionStyle.board}>
                   <h2>엑셀 시트 자료</h2>
                   <img id={QuestionStyle.questionSheet} src={Sheet}/>
               </div>
           </div>
       </div>
    </React.Fragment>
    );
}

export default Question;