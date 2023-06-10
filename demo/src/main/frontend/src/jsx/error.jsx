import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ErrorStyle from '../css/error.module.css';
import { Router, Routes, Route, Link, useNavigate } from "react-router-dom";

function ErrorPage() {
    const navigate = useNavigate();

    const navigateToMain = () => {
      navigate("/");
    };

    return (
        <React.Fragment>
        <div id={ErrorStyle.message}>
            <h1> Excel Function Study with Simulator</h1>
                <h1>[Senior]</h1>
            <h2> 웹서비스 준비중입니다.</h2>
            <h3>2024 - 02 - 16 에 찾아뵙겠습니다.</h3>
            <div className={ErrorStyle.buttonContainer}>
                <button type="button" onClick={navigateToMain}>홈 화면으로 돌아가기</button>
            </div>
        </div>
        </React.Fragment>
    );
}

export default ErrorPage;