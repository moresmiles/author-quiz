import React from 'react';
import Hero from './Hero';
import Turn from './Turn';
import './AuthorQuiz.css';
import './bootstrap.min.css'

const AuthorQuiz = ({turnData, highlight, onAnswerSelect}) => {
    return (
      <div className="container-fluid">
        <Hero />
        <Turn {...turnData} highlight={highlight} onAnswerSelect={onAnswerSelect}/>
     </div>
    );
  }


export default AuthorQuiz;
