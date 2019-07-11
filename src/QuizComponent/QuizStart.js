import React from 'react';
import "./quizstart.css";


const QuizStart = () =>
{
   
    return (
        <div>
            <div className="inst-block">
               {/* <div  className="btn"> <button className= " ui floating message options ">
                    Let's Test Your Sports
                </button>
                </div> */}
                <div className="instructions">
                        Instructions
                    <div  className >  
                        1.The Quiz will be of "" questions.
                    </div>
                    <div className="">
                        2.You have "" seconds to answer them.
                    </div>
                    <div className="">
                        3.The more you answer correctly,the more "coins" you get. 
                    </div>
                    <div className="">
                        4.Also no negative marking
                        so make sure you answer all the questions.
                    </div>
                    </div>
            </div>
        </div>
    );

} 








export default QuizStart;
