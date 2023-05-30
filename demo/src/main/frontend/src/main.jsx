import React, {useEffect, useState} from 'react';
import axios from 'axios';
import MainStyle from './css/main.module.css';
import { Router, Routes, Route, Link } from "react-router-dom";

import Beginner from './img/newbie.png';
import Junior from './img/promotion.png';
import Senior from './img/rating.png';

function Main() {
    return (
        <React.Fragment>
            <nav>
                <ul>
                    <li><Link to="#">메인 화면</Link></li>
                    <li><Link to="/api/certificate">수료증</Link></li>
                    <li><Link to="/api/question">함수 문제</Link></li>
                    <li><Link to="/api/function_dic">함수 사전</Link></li>
                </ul>
            </nav>

            <h1>Excel Function Study with Simulator</h1>

            <div className={MainStyle.container}>
                <div className={MainStyle.section}>
                    <div>
                        <img src={Beginner} alt="초급단계"/>
                        <h2>초급</h2>
                        <p>CLEAR!</p>
                        <div>
                            <button type="button" onclick="#">입장하기</button>
                        </div>
                    </div>
                </div>

                <div className={MainStyle.section}>
                    <div>
                        <img src={Junior} alt="중급단계"/>
                    <h2>중급</h2>
                    <p>★ 10 / 30</p>
                        <div>
                            <button type="button" onclick="#">입장하기</button>
                        </div>
                    </div>
                    </div>

                <div className={MainStyle.section}>
                    <div>
                        <img src={Senior} alt="고급단계"/>
                    <h2>고급</h2>
                    <p>★ 5 / 30</p>
                        <div>
                            <button type="button" onclick="#">입장하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Main;