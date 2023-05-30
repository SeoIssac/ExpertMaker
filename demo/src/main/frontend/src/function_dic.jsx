import React, {useEffect, useState} from 'react';
import axios from 'axios';
import FuncStyle from './css/func_dic.module.css';


function Function_dic() {
    return (
        <React.Fragment>
            <h1>함수 사전</h1>
            <div className={FuncStyle['search-box']}>
                <span className={FuncStyle['search-box-label']}>함수 검색</span>
                <input id="my-search-box" placeholder="함수를 입력하세요. ex. VLOOKUP, SUMIF, ..." name="s" title="함수검색" className={FuncStyle['func-search-field']}/>
            </div>
            <div id="func-list-box">
                <ol id="filter-target-list">
                    <li className={FuncStyle['func-list-item']}>
                        <div className={FuncStyle['func-name']}>
                            <div className={FuncStyle['name-box']}>
                                <a>ADDRESS 함수</a>
                            </div>
                        </div>
                        <div className={FuncStyle['func-summary']}>
                            <div className={FuncStyle['summary-box']}>
                                <span className={FuncStyle['func-cat']}>찾기 및 참조 : </span>
                                <span>입력한 열/행번호의 셀주소를 지정한 형식으로 반환합니다.</span>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </React.Fragment>
    );
}

export default Function_dic;