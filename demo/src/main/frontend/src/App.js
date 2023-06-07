import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Routes, Route, Link, useLocation } from "react-router-dom";

import Main from './jsx/main.jsx';
import Function_dic from './jsx/function_dic.jsx';
import Question from './jsx/question.jsx';

import PageService from './service/PageService.jsx';

import './css/func_dic.module.css';
import './css/main.module.css';


function App() {
    const location = useLocation();
    const [testText, setText] = useState('text');
    const path = JSON.parse(JSON.stringify(location.pathname)).split("/");

    useEffect((res) => {
        PageService.getFuncDic().then((res) => {
            //console.log(JSON.parse(JSON.stringify(res.data)));
        });

    }, []);

    useEffect(() => {
        document.body.classList.value = '';

        switch(path[1]) {
            case "": document.body.classList.add('MainBody'); break;
            case "function_dic": document.body.classList.add('FuncDicBody'); break;
            case "question" :
                if(path[2] === "BEGINNER") { document.body.classList.add('BeginnerBody'); }
                else if(path[2] === "JUNIOR") { document.body.classList.add('JuniorBody'); }
                else if(path[2] === "SENIOR") { document.body.classList.add('SeniorBody'); }
                break;
            default: document.body.classList.add('MainBody');
        }
    }, [location]);

    return (
        <React.Fragment>
            <input type="hidden" value={path[1]}/>
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/function_dic" element={<Function_dic />}></Route>
                <Route path="/question/:level" element={<Question />}></Route>
            </Routes>
        </React.Fragment>
    );
}

export default App;