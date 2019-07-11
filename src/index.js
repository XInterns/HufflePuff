import React from 'react';
import ReactDOM from 'react-dom';
// import Exapmle from './QuizComponent/timer';
// import QuizStart from './QuizComponent/QuizStart';
// import App from './App';
import Quiz from './QuizComponent/Quiz';



import "./QuizComponent/Quizpage.css";

function App()
{
    return (
        <div className = "App">
            {/* <Exapmle /> */}
            <Quiz />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

