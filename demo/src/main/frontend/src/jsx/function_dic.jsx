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
                <span className={FuncStyle.searchboxlabel}>함수 검색</span>
                <input id={FuncStyle.mySearchBox} className={FuncStyle.functionsearchfield} placeholder="함수를 입력하세요. ex. VLOOKUP, SUMIF, ..." name="s" title="함수검색"/>
            </div>

            <div id={FuncStyle.functionListBox}>
                <ol id={FuncStyle.filtertargetlist} className={FuncStyle.functionlist}>

                    <li className={FuncStyle.functionlistitem}>
                        <div className={[FuncStyle.functionname, FuncStyle.searchterms].join(" ")}>
                            <div className={FuncStyle.namebox}>
                                <a>ADDRESS 함수</a>
                            </div>
                        </div>
                        <div className={[FuncStyle.functionsummary, FuncStyle.searchterms].join(" ")}>
                            <div className={FuncStyle.summarybox}>
                                <span className={FuncStyle.functionCat}>찾기 및 참조 : </span>
                                <span className={FuncStyle.functionDesc}>입력한 열/행번호의 셀주소를 지정한 형식으로 반환합니다.</span>
                            </div>
                        </div>
                    </li>

                    <li className={FuncStyle.functionlistitem}>
                        <div className={[FuncStyle.functionname, FuncStyle.searchterms].join(" ")}>
                            <div className={FuncStyle.namebox}>
                                <a>AVERAGE 함수</a>
                            </div>
                        </div>
                        <div className={[FuncStyle.functionsummary, FuncStyle.searchterms].join(" ")}>
                            <div className={FuncStyle.summarybox}>
                                <span className={FuncStyle.functionCat}>통계 : </span>
                                <span className={FuncStyle.functionDesc}>지정한 범위나 숫자의 평균(산술 평균)을 계산합니다.</span>
                            </div>
                        </div>
                    </li>

                    <li className={FuncStyle.functionlistitem}>
                        <div className={[FuncStyle.functionname, FuncStyle.searchterms].join(" ")}>
                            <div className={FuncStyle.namebox}>
                                <a>AVERAGEIF 함수</a>
                            </div>
                        </div>
                        <div className={[FuncStyle.functionsummary, FuncStyle.searchterms].join(" ")}>
                            <div className={FuncStyle.summarybox}>
                                <span className={FuncStyle.functionCat}>통계 : </span>
                                <span className={FuncStyle.functionDesc}>조건을 만족하는 셀의 평균(산술 평균)을 계산합니다.</span>
                            </div>
                        </div>
                    </li>

                    <li className={FuncStyle.functionlistitem}>
                        <div className={[FuncStyle.functionname, FuncStyle.searchterms].join(" ")}>
                            <div className={FuncStyle.namebox}>
                                <a>CHAR 함수</a>
                            </div>
                        </div>
                        <div className={[FuncStyle.functionsummary, FuncStyle.searchterms].join(" ")}>
                            <div className={FuncStyle.summarybox}>
                                <span className={FuncStyle.functionCat}>텍스트 : </span>
                                <span className={FuncStyle.functionDesc}>입력한 코드에 해당하는 문자를 반환합니다.</span>
                            </div>
                        </div>
                    </li>

                    <li className={FuncStyle.functionlistitem}>
                        <div className={[FuncStyle.functionname, FuncStyle.searchterms].join(" ")}>
                            <div className={FuncStyle.namebox}>
                                <a>IF 함수</a>
                            </div>
                        </div>
                        <div className={[FuncStyle.functionsummary, FuncStyle.searchterms].join(" ")}>
                            <div className={FuncStyle.summarybox}>
                                <span className={FuncStyle.functionCat}>논리 : </span>
                                <span className={FuncStyle.functionDesc}>입력한 조건의 참/거짓을 판단하여 값을 반환합니다.</span>
                            </div>
                        </div>
                    </li>

                    <li className={FuncStyle.functionlistitem}>
                        <div className={[FuncStyle.functionname, FuncStyle.searchterms].join(" ")}>
                            <div className={FuncStyle.namebox}>
                                <a>SUM 함수</a>
                            </div>
                        </div>
                        <div className={[FuncStyle.functionsummary, FuncStyle.searchterms].join(" ")}>
                            <div className={FuncStyle.summarybox}>
                                <span className={FuncStyle.functionCat}>수학 및 삼각 : </span>
                                <span className={FuncStyle.functionDesc}>선택된 셀 또는 범위의 합계를 구합니다.</span>
                            </div>
                        </div>
                    </li>

                    <li className={FuncStyle.functionlistitem}>
                        <div className={[FuncStyle.functionname, FuncStyle.searchterms].join(" ")}>
                            <div className={FuncStyle.namebox}>
                                <a>SUMIF 함수</a>
                            </div>
                        </div>
                        <div className={[FuncStyle.functionsummary, FuncStyle.searchterms].join(" ")}>
                            <div className={FuncStyle.summarybox}>
                                <span className={FuncStyle.functionCat}>수학 및 삼각 : </span>
                                <span className={FuncStyle.functionDesc}>범위에서 조건을 만족하는 값의 합계를 계산합니다.</span>
                            </div>
                        </div>
                    </li>

                    <li className={FuncStyle.functionlistitem}>
                        <div className={[FuncStyle.functionname, FuncStyle.searchterms].join(" ")}>
                            <div className={FuncStyle.namebox}>
                                <a>VLOOKUP 함수</a>
                            </div>
                        </div>
                        <div className={[FuncStyle.functionsummary, FuncStyle.searchterms].join(" ")}>
                            <div className={FuncStyle.summarybox}>
                                <span className={FuncStyle.functionCat}>찾기 및 참조 : </span>
                                <span className={FuncStyle.functionDesc}>세로로 입력된 자료에서 원하는 값을 찾아 옆에 위치한 다른 값을 참조합니다.</span>
                            </div>
                        </div>
                    </li>

                </ol>
            </div>
        </React.Fragment>
    );
}

export default Function_dic;