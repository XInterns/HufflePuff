import React from 'react';
import {QuizData} from './QuizData';
// import  from './timer';


class Quiz extends React.Component
{
    state = 
    {
        userAnswer: null,
        currentQuestion:0,
        options: [],
        quizEnd: false,
        score:0,
        disabled: true
    }

    loadQuiz = () =>
    {
        const{currentQuestion} = this.state;
        this.setState(() => {
            return {
                questions:QuizData[currentQuestion].question,
                options:QuizData[currentQuestion].options,
                answers:QuizData[currentQuestion].answer

            };
        })
   }
   componentDidMount()
   {
       this.loadQuiz();
   }
   nextQuestionHandler = () =>{
       const {userAnswer,answers,score}=this.state;
       this.setState({
           currentQuestion: this.state.currentQuestion + 1

       })
       console.log(this.state.currentQuestion)

       if (userAnswer === answers)
       {
           this.setState({
               score:score+1
           })
       }
   }
   componentDidUpdate(prevProps , prevState)
   {
       const {currentQuestion} = this.state;
       if(this.state.currentQuestion !== prevState.currentQuestion){
           this.setState( () => {
               return{
                disabled:false, 
                questions: QuizData[currentQuestion].question,
                options: QuizData[currentQuestion].options,
                answers: QuizData[currentQuestion].answer

               };
           })
       }
   }
   checkAnswer = answer =>
   {
       this.setState({
           userAnswer:answer,
           disbaled:true
        })
   }
   finishHandler = () =>
   {
       if(this.state.currentQuestion === QuizData.length -1)
       this.setState({quizEnd:true})
   }
    render()
    {
        const {questions, options , currentQuestion , userAnswer , quizEnd} = this.state;
        if(quizEnd)
        { 
            return(
            <div className="result">
                <h2>Game Over The Final Score Is {this.state.score * 10} </h2>
                
            </div>
            )
        }


        return (
            <div className="App">
                <span>
                    {`Questions ${currentQuestion + 1} out of ${QuizData.length}`}
                </span>
                <h2>{questions}</h2>
                
                    {options.map(option => (
                        <p
                        key={option.id}
                        className={`ui floating message options
                   ${userAnswer === option ? "selected" : null}
                   `} 
                   onClick={() => this.checkAnswer(option)}>
                            {option}
                        </p>
                    ))}
                    
                    
                    { currentQuestion < QuizData.length -1 && (
                    <button className="ui inverted button" dsiabled ={this.state.disabled} onClick={this.nextQuestionHandler}>
                        Next
                    </button>)}
                    {currentQuestion === QuizData.length - 1 && (
                    <button
                    onClick={this.finishHandler}>Fin80ish</button>)  
                    }
                 

            </div>
        )
    }
}


export default Quiz;