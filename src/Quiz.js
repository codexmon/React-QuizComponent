import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion.js';
import QuizEnd from './QuizEnd.js';

let quizData = require('./quiz_data.json');

class Quiz extends Component {

    constructor(props){
        super(props);
        this.state={quiz_position: 1}
    }

    render(){
        const isQuizEnd = false
        return (
            <div>
                {/* <div className="QuizQuestion">{quizData.quiz_questions[0].instruction_text}</div> 

                Inside of this div with a className of QuizQuestion, we are accessing the first element in the quiz_questions property of the quizData object, and displaying the instruction_text value.

                This div can be replaced by the QuizQuestion component on the next line*/}
                {isQuizEnd ? <QuizEnd /> : 
                <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />}
                {/* In that <QuizQuestion /> component, add a prop named quiz_question that passes the value of the quizData.quiz_questions array at the state's quiz_position minus 1. This will send data for the first question over to the QuizQuestion component. */}

            </div>
        )
        
    }
}

export default Quiz;