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

        const isQuizEnd = ((this.state.quiz_question - 1) === quizData.quiz_questions.length)
        
        return (
            <div>
              
                {isQuizEnd ? <QuizEnd /> : 
                <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />}
                {/* In that <QuizQuestion /> component, add a prop named quiz_question that passes the value of the quizData.quiz_questions array at the state's quiz_position minus 1. This will send data for the first question over to the QuizQuestion component. */}

            </div>
        )
        
    }
}

export default Quiz;