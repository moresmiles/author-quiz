import React from 'react';
import Hero from './Hero';
import Turn from './Turn';
import Continue from './Continue';
import {Link} from 'react-router-dom';
import './AuthorQuiz.css';
import './bootstrap.min.css'

const AuthorQuiz = ({turnData, highlight, onAnswerSelect, onContinue}) => {
    return (
      <div className="container-fluid">
        <Hero />
        <Turn {...turnData} highlight={highlight} onAnswerSelect={onAnswerSelect}/>
        <Continue show={highlight === 'correct'} onContinue={onContinue}/>
        <p> <Link to="/add"> Add an Author </Link> </p>
     </div>
    );
  }


export default AuthorQuiz;
