import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
   const [hello, setHello] = useState('')
   const [question, setQuest] = useState({
            id: null,
            level: null,
            quest: null,
            answer: null,
            correctImgSrc: null,
            sheetImgSrc: null
   })

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        axios.get('/api/test')
        .then(response => setQuest(response.data))
        .catch(error => console.log(error))
    }, []);

    /*return (
        <div>
            백엔드에서 가져온 데이터입니다 : {hello}
        </div>
    );*/

    return (
        <>
            <h3>문제 번호: {question.id}</h3>
            <h3>문제 난이도: {question.level}</h3>
            <h3>문제 내용: {question.quest}</h3>
            <h3>문제 답: {question.answer}</h3>
        </>
    );
}

export default App;