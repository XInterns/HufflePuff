import React from 'react';
import ReactDOM from 'react-dom';
import Exapmle from './timer';
import Quiz from './Quiz';
import "./QuizComponent/Quizpage.css";

function App()
{
    return (
        <div className = "App">
            <Exapmle />
            <Quiz />

        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
