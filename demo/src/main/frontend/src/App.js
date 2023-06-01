import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Main from './jsx/main.jsx';
import Function_dic from './jsx/function_dic.jsx';
import './css/func_dic.module.css';
import './css/main.module.css';
import PageService from './service/PageService.jsx';


function App() {
    const location = useLocation();
    const [testText, setText] = useState('text');

    useEffect((res) => {
        PageService.getFuncDic().then((res) => {
            //console.log(JSON.parse(JSON.stringify(res.data)));
        });

    }, []);

    useEffect(() => {
        document.body.classList.value = '';

        switch(JSON.parse(JSON.stringify(location.pathname))) {
            case "/": document.body.classList.add('MainBody'); break;
            case "/function_dic": document.body.classList.add('FuncDicBody'); break;
            default: document.body.classList.add('MainBody');
        }
    }, [location]);

    return (
        <React.Fragment>
            <input type="hidden" value={JSON.parse(JSON.stringify(location.pathname))}/>
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/function_dic" element={<Function_dic />}></Route>
            </Routes>
        </React.Fragment>
    );
}

export default App;