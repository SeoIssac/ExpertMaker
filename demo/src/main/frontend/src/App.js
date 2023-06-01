import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Router, Routes, Route, Link } from "react-router-dom";
import Main from './main.jsx';
import Function_dic from './function_dic.jsx';
import FuncDicService from './service/FuncDicService.jsx';


function App() {
    const [testText, setText] = useState('text');

    useEffect((res) => {
        FuncDicService.getFuncDic().then((res) => {
            setText(res);
        });
    });

    return (
        <React.Fragment>
            <input type="hidden" value={testText}/>
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/api/function_dic" element={<Function_dic />}></Route>
            </Routes>
        </React.Fragment>
    );
}

export default App;