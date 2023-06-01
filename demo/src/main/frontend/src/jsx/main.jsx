import React, {useEffect, useState} from 'react';
import axios from 'axios';
import MainStyle from '../css/main.module.css';
import { Router, Routes, Route, Link } from "react-router-dom";

import Beginner from '../img/newbie3.png';
import Junior from '../img/promotion3.png';
import Senior from '../img/rating3.png';

function Main() {
    return (
        <React.Fragment>
        <div id={MainStyle.menu}>
            <nav>
                <ul>
                    <li><Link to="/function_dic">함수 사전</Link></li>
                </ul>
            </nav>
        </div>

        <div id={MainStyle.title}>
            <h1>Excel Function Study with Simulator</h1>
        </div>

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