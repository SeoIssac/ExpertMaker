import React, {useEffect, useState} from 'react';
import axios from 'axios';
import FuncStyle from '../css/func_dic.module.css';
import { Router, Routes, Route, Link } from "react-router-dom";


function Function_dic() {
    return (
        <React.Fragment>
        <div id={FuncStyle.menu}>
            <ul>
                <li><Link to="/">메인 화면</Link></li>
            </ul>
        </div>

        <div id={FuncStyle.title}>
            <h1>함수 사전</h1>
        </div>

            <div className={FuncStyle.searchbox}>
                <span className={FuncStyle.searchBoxLabel}>함수 검색</span>
                <input id="mySearchBox" placeholder="함수를 입력하세요. ex. VLOOKUP, SUMIF, ..." name="s" title="함수검색"
                className={FuncStyle.functionsearchfield}/>
            </div>
            <div id="functionListBox">
                <ol id="filter-target-list">
                    <li className={FuncStyle.functionlistitem}>
                        <div className={FuncStyle.functionname}>
                            <div className={FuncStyle.namebox}>
                                <a>ADDRESS 함수</a>
                            </div>
                        </div>
                        <div className={FuncStyle.functionsummary}>
                            <div className={FuncStyle.summarybox}>
                                <span className={FuncStyle.functionCat}>찾기 및 참조 : </span>
                                <span className={FuncStyle.functionDes}>입력한 열/행번호의 셀주소를 지정한 형식으로 반환합니다.</span>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </React.Fragment>
    );
}

export default Function_dic;