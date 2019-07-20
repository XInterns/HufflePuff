import React from 'react';
import {QuizData} from './QuizData';
import './Quizpage.css';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

var count=0;
class Quiz extends React.Component
{
    constructor(props){
        super(props);
        this.state={
        userAnswer: null,
        currentQuestion:0,
        options: [],
       
        score:0,
        disabled: true,
        value:60
        }
        this._decrease();
    }

    _decrease(){
        this.setState({value: this.state.value - 1});
        if(this.state.value>0){
          setTimeout(this._decrease.bind(this), 1000);
        }
      }

    _nextComponent() {
        if(this.state.value===0) {
          this.props.endTimer();
          if(this.props.quizEnd)
            { 
                return(
                <div className="result">
                    <div>Game Over The Final Score Is {this.props.quizScore * 10} </div>
    
                    <NavLink to="/" className="ui inverted button   ">Go Back</NavLink>
                    
                </div>
                )
            }
        }
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
       const {userAnswer,answers, score}=this.state;
       this.setState({
           currentQuestion: this.state.currentQuestion + 1

       })
       console.log(this.state.currentQuestion)

       if (userAnswer === answers)
       {        
               this.setState({
                   score: score+1,
               })
            count= count+1;
                this.props.quizScoreHandler(count);
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
       if(this.state.currentQuestion === QuizData.length -1){
           this.props.quizEndHandler();
       }
    //    this.setState({props.quizEnd})
   }
    render()
    {   
        // console.log(this.props);
        const {questions, options , currentQuestion , userAnswer , score} = this.state;
        if(this.props.quizEnd)
        { 
            return(
            <div className="result">
                <h2 className="endmessage">Game Over The Final Score is: {score * 10} </h2>

                <NavLink to="/" className="ui inverted button   ">Go Back</NavLink>
                
            </div>
            )
        }


        return (
            <div className="Quizapp">
                 <h4> Time Remaining: {this.state.value} </h4>
                 {this._nextComponent()}
                <span className="ques-num">
                    {`Questions ${currentQuestion + 1} out of ${QuizData.length}`}
                </span>
                <h2 className="ques-display">{questions}</h2>
                
                <div className="optionsContainer">
                {options.map(option => (
                        <div
                        key={option.id}
                        className={`options 
                   ${userAnswer === option ? "selected" : null}
                   `} 
                   onClick={() => this.checkAnswer(option)}>
                            {option}
                        </div>
                    ))}
                </div>
                    
                    { currentQuestion < QuizData.length -1 && (
                    <button className="ui inverted button" dsiabled ={this.state.disabled} onClick={this.nextQuestionHandler}>
                        Next
                    </button>)}
                    {currentQuestion === QuizData.length - 1 && (
                    <button
                    className="ui inverted button"
                    onClick={this.finishHandler}>Finish</button>)  
                    }
                 

            </div>
        )
    }
}

const mapStateToProps =(state) => {
    return{
        quizEnd: state.quizEnd.quizEnd,
        scoreUpdate: state.quizEnd.quizScore,
        quizScore: state.quizEnd.quizScore,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
      quizEndHandler: () => dispatch({type: 'QUIZ_FINISH'}),
      quizScoreHandler: (count) => dispatch({type: 'UPDATE_QUIZ_SCORE', payload: count}),
      endTimer: () => dispatch({type:"TIMER_ZERO"})

    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);